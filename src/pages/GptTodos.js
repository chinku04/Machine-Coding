import { useEffect, useState } from "react";

const GptTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos?limit=10&skip=80");
        const data = await response.json();
        setTodos(data.todos);
      } catch (err) {
        setError("Failed to fetch todos");
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const groupedTodos = todos.reduce((acc, todo) => {
    if (!acc[todo.userId]) {
      acc[todo.userId] = [];
    }
    acc[todo.userId].push(todo);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedTodos).map(([userId, userTodos]) => (
        <div key={userId} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <h3>User ID: {userId}</h3>
          <ul>
            {userTodos.map((todo) => (
              <li key={todo.id}>{todo.todo} {todo.completed ? "✅" : "❌"}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GptTodos;
