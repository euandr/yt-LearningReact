// fazendo o gerenciador de tarefas do tutorial

import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./index.css";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [task, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function OnDeleteTaskClick(taskId) {
    const newTask = task.filter((task) => task.id != taskId);
    setTasks(newTask);
    // lógica para deletar a tarefa
  }

  function onTaskClick(TasksId) {
    const NewTask = task.map((task) => {
      if (task.id == TasksId) {
        return { ...task, isCompleted: !task.isCompleted };
        // Quando uma função executa um return, ela termina imediatamente.
        // esse return é do map
      }

      return task;
    });

    setTasks(NewTask);
  }

  function OnAddTaskSubmit(title, description) {
    const NewTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...task, NewTask]);
  }

  // dois parâmetros: função e lista
  // a função é executada toda vez que algum valor da lista muda
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  // useEffect(() => {
  //   async function fetchTasks(){
  //     // chamar api
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );

  //     // pegar dados que ela retorna
  //     const data = await response.json(); // convertendo resposta para json

  //     // armazenar esses dados no state
  //     setTasks(data);

  //   }
  //   fetchTasks();
  // }, []); // se a lista estiver vazia, executa só uma vez quando o componente for montado ou seja no início

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
