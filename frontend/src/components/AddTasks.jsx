import { useState } from "react";
import Input from "./input";

function AddTasks({ OnAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-400 p-6 space-y-4 rounded-md flex flex-col shadow-md">
      <Input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={function () {
          // verificar se o título e a descrição não estão prenchidos
          if (!title.trim() || !description.trim()) {
            return alert(
              "Por favor, preencha o título e a descrição da tarefa"
            );
          }
          OnAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium "
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
