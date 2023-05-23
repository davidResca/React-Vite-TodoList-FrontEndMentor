const TodoFilter = ({ filterTodos, filter }) => {
  return (
    <section className="container mx-auto mt-8 md:mt-0">
      <div className="flex justify-center gap-8 rounded-md bg-white p-4 transition-all duration-300 dark:bg-gray-800 dark:text-gray-400 md:rounded-t-none">
        <button
          onClick={() => filterTodos("all")}
          className={`${
            filter === "all" ? "text-blue-600" : "hover:text-blue-600"
          }`}
        >
          All
        </button>
        <button
          onClick={() => filterTodos("active")}
          className={`${
            filter === "active" ? "text-blue-600" : "hover:text-blue-600"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => filterTodos("completed")}
          className={`${
            filter === "completed" ? "text-blue-600" : "hover:text-blue-600"
          }`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
