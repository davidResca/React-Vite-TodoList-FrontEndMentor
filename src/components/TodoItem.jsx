import IconChecked from "./icons/IconChecked";
import CrossIcon from "./icons/IconCross";
import React from "react";

const TodoItem = React.forwardRef(({ todo, removeTodo, todoUpdate, ...props }, ref) => {
  const IconCheckedStyle =
    "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
  const IconUncheckedStyle = "inline-block flex-none";

  return (
    <article {...props} ref={ref} className="border-b-gray-80 flex items-center gap-4 border-b">
      <button
        onClick={() => todoUpdate(todo.id)}
        className={`h-5 w-5 rounded-full border-2 ${
          todo.completed ? IconCheckedStyle : IconUncheckedStyle
        }`}
      >
        {todo.completed && <IconChecked />}
      </button>
      <p
        className={`grow text-gray-600 dark:text-gray-400
        ${todo.completed && "line-through"}
        `}
      >
        {todo.title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(todo.id)}>
        <CrossIcon />
      </button>
    </article>
  );
});

export default TodoItem;
