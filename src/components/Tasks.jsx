import { Check, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, OnDeleteTaskClick }) {
  const navigate = useNavigate();
  

  function onSeeDeatailsClick(task) {
    // por questão de seguranca usar isso abaixo
    const query = new URLSearchParams(); // isso para ele formatar caracteres especiais como espaço
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/tasks?${query.toString()}`);
  }


  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
      {tasks.map((task) => (
        <li key={task} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md flex items-center gap-2 ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <Check />}
            {task.title}
          </button>

          <Button onClick={() => onSeeDeatailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => OnDeleteTaskClick(task.id)} >
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
