import { use, useEffect, useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const fetchUserData = () => {
        fetch('https://dummyjson.com/todos?limit=10&skip=80')
            .then(response => response.json())
            .then(data => setTodos(data.todos));
    }


    const renderTodos = () => {
        let userGroup = todos.reduce((acc, todo) => {
            if (!acc[todo?.userId]) {
                acc[todo?.userId] = [];
            }
            acc[todo?.userId].push(todo);
            return acc;
        }, {});

        return Object.keys(userGroup)?.map((userId, index) => (
            <div key={index}>
                <h3>User {userId}</h3>
                {userGroup[userId].map((todo) => (
                    <div key={todo.id}>
                        <div>
                            {todo.todo} {todo.completed ? "✅" : "❌"}
                        </div>
                    </div>
                ))}
            </div>
        ))
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <div>
            <h1>Todo</h1>
            {todos.length && renderTodos()}
            {/* {groupedTodos?.map((todo, index) => (
                <div key={index}>
                    <div>
                        {todo.id}
                    </div>
                    <div>
                        {todo.todo}
                    </div>
                </div>
            ))} */}

        </div>
    );
}

export default Todo;