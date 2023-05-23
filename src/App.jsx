import { DragDropContext } from "@hello-pangea/dnd";
import "./utils/darkMode";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const arrayTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const [todos, setTodos] = useState(arrayTodos);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const todoUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filterTodos = (state) => setFilter(state);

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-500 dark:bg-gray-900 dark:bg-[url('assets/images/bg-mobile-dark.jpg')] md:bg-[url('assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('assets/images/bg-desktop-dark.jpg')]">
      <Header />

      <main className="container mx-auto mt-8 max-w-lg px-8">
        <TodoCreate createTodo={createTodo} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filteredTodos("all")}
            removeTodo={removeTodo}
            todoUpdate={todoUpdate}
          />
        </DragDropContext>
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />
        <TodoFilter filterTodos={filterTodos} filter={filter} />
      </main>

      <footer>
        <p className="mt-8 text-center text-gray-400">
          Drag and drop to reorder list
        </p>
      </footer>
    </div>
  );
}

export default App;
