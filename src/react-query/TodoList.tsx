
import usetodo from "../routing/hooks/UseTodo";



const TodoList = () => {
  const { data: todos, error, isLoading } = usetodo();
  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
