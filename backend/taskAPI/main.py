from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from contextlib import asynccontextmanager
from database import create_table, conectar_db, insert_task, get_tasksDB, update_taskDB, update_task_statusDB, delete_taskDB, get_task_byIdDB
from fastapi.middleware.cors import CORSMiddleware

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_table()
    yield
    

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5173",
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# tasks = []
# proximo_id = 1


class TaskCreate(BaseModel):
    title: str
    description: str


# class Task(BaseModel):
#     id: int
#     title: str
#     description: str
#     is_done: bool = False





@app.post("/tasks", status_code=201)
def create_task(task: TaskCreate):
    insert_id = insert_task(task.title, task.description)
    return {
        "message": "Task created successfully" if insert_id else "Failed to create task",
    }
    


@app.get("/tasks")
def get_tasks(is_done: bool | None = None):
    tasks_data = get_tasksDB(is_done)
    return[
        {"id": task[0], "title": task[1], "description": task[2], "is_done": bool(task[3] )} for task in tasks_data
    ]

@app.get("/tasks/{task_id}", status_code=200)
def get_task(task_id: int):
    if task_id in [task[0] for task in get_tasksDB()]:
        return[
            {"id": task[0], "title": task[1], "description": task[2], "is_done": bool(task[3] )} for task in get_task_byIdDB(task_id)
    ]
    raise HTTPException(status_code=404, detail="Task not found")

@app.put("/tasks/{task_id}", status_code=200)
def update_task(task_id: int, updated_task: TaskCreate):
    if task_id in [task[0] for task in get_tasksDB()]:
        update_taskDB(task_id, updated_task.title, updated_task.description)
        return {"message": "Task updated successfully"}
    else:
        raise HTTPException(status_code=404, detail="Task not found")


@app.patch("/tasks/{task_id}/is_done", status_code=200)
def mark_task_done(task_id: int):
    data = get_tasksDB()
    for task in data:
        if task[0] == task_id:
            if bool(task[3]):
                is_done = 0
                message = "Task marked as not done"
            else:
                is_done = 1
                message = "Task marked as done"
            update_task_statusDB(task_id, is_done)
            return {
                "message": message,
            }
    raise HTTPException(status_code=404, detail="Task not found")

@app.delete("/tasks/{task_id}", status_code=200)
def delete_task(task_id: int):
    if task_id in [task[0] for task in get_tasksDB()]:
        delete_taskDB(task_id)
        return{
            "message": "task was deleted"
        }
        
    raise HTTPException(status_code=404, detail="Task not found")