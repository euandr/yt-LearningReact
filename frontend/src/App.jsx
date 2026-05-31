// fazendo o gerenciador de tarefas do tutorial

import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./index.css";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [task, setTasks] = useState([]);

  async function OnDeleteTaskClick(taskId) {
    await fetch(`http://localhost:8000/tasks/${taskId}`, {
        method: "DELETE"
    });
    const newTask = task.filter((task) => task.id != taskId);
    setTasks(newTask);
  }

  async function onTaskClick(TasksId) {
    await fetch(`http://localhost:8000/tasks/${TasksId}/is_done`, {
        method: "PATCH"
    });
    const NewTask = task.map((task) => {
      if (task.id == TasksId) {
        return { ...task, is_done: !task.is_done };
        // Quando uma função executa um return, ela termina imediatamente.
        // esse return é do map
      }

      return task;
    });

    setTasks(NewTask);
  }

  async function OnAddTaskSubmit(ttitle, ddescription) {
    await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          title: ttitle,
          description: ddescription,
      })
    });
    carregar();
  }

  async function carregar() {
    const resposta = await fetch("http://localhost:8000/tasks");
    const dados = await resposta.json();
    setTasks(dados);
  }


  useEffect(() => {
    carregar();
  }, []);

  // useEffect(() => {
  //     console.log("do UserState: ",task);
  // }, [task]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-3">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks OnAddTaskSubmit={OnAddTaskSubmit} />
        <Tasks
          tasks={task}
          onTaskClick={onTaskClick}
          OnDeleteTaskClick={OnDeleteTaskClick}
        />
      </div>
    </div>
  );
}
export default App;
