import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    } else {
      createTodo(title);
      console.log(title);
    }
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      action=""
      className="mt-8 md:mt-16 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3 dark:bg-gray-800 transition-all duration-300"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="text-gray w-full outline-none dark:bg-gray-800 dark:text-gray-200 transition-all duration-300"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
