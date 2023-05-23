const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className={`flex justify-between rounded-b-md bg-white px-4 py-4 transition-all duration-300 dark:bg-gray-800 md:rounded-b-none md:border-b-gray-80 ${computedItemsLeft === 0 && 'rounded-t-md md:rounded-t-md'}`}>
      <span className="text-gray-400">{`${computedItemsLeft} items left`}</span>
      <button onClick={clearCompleted} className="text-gray-400">
        Clear completed
      </button>
    </section>
  );
};

export default TodoComputed;
