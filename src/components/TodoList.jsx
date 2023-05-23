import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, todoUpdate }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvided) => (
        <div
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className={`${
            !todos.length && "mt-16 md:mt-32"
          } mt-4 rounded-t-md bg-white transition-all duration-300 dark:bg-gray-800 md:mt-16 [&>article]:p-4`}
        >
          {todos.map((todo, index) => (
            <Draggable 
              key={todo.id} 
              index={index} 
              draggableId={`${todo.id}`}
            >
              {(draggableProvided) => (
                <TodoItem
                  todo={todo}
                  removeTodo={removeTodo}
                  todoUpdate={todoUpdate}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.draggableProps}
                  {...draggableProvided.dragHandleProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
