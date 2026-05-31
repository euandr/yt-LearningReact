import os
import sqlite3


base_dir = os.path.dirname(os.path.abspath(__file__))
database_path = os.path.join(base_dir, "tasks.db")



def conectar_db():
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    return cursor, conn

def create_table():
    cursor, conn = conectar_db()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            is_done BOOLEAN NOT NULL DEFAULT 0
        )
    """)
    conn.commit()

def insert_task(title: str, description: str):
    cursor, conn = conectar_db()
    cursor.execute("""
        INSERT INTO tasks (title, description) VALUES (?, ?)
    """, (title, description))
    conn.commit()
    return cursor.lastrowid

def get_tasksDB(is_done: bool | None = None):
    cursor, conn = conectar_db()
    if is_done is None:
        cursor.execute("SELECT * FROM tasks")
    else:
        cursor.execute('SELECT * FROM tasks  WHERE is_done = ?', (is_done,))
    return cursor.fetchall()

def update_taskDB(task_id: int, title: str, description: str):
    cursor, conn = conectar_db()
    cursor.execute("""
        UPDATE tasks SET title = ?, description = ? WHERE id = ?
    """, (title, description, task_id))
    conn.commit()

def update_task_statusDB(task_id: int, is_done: bool):
    cursor, conn = conectar_db()
    cursor.execute("""
        UPDATE tasks SET is_done =? WHERE id = ?
    """, (is_done, task_id))
    conn.commit()


def delete_taskDB(task_id: int):
    cursor, conn = conectar_db()
    cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    conn.commit()

def get_task_byIdDB(task_id: int):
    cursor, conn = conectar_db()
    cursor.execute("SELECT * FROM tasks WHERE id = ?", (task_id,))
    conn.commit()
    return cursor.fetchall()

if __name__ == "__main__":
    print(get_task_byIdDB(3))