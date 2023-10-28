import React, { useEffect, useState } from "react";
import axios from "axios";
import { todoListUrl } from "../Constants/constants";
import AddTodo from "./addTodo";
import Toggle from "./toggle";
import EditDeleteTodos from "./editDelete";

const TodoList = () => {
    const [todoLists, setTodoLists] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [toggle, setToggle] = useState('all');

    const addTask = (e, index) => {
        e.preventDefault()
        setTodoLists([...todoLists, { id: index + 1, title: newTodo, completed: false }]);
        setNewTodo('');
    };

    const toggleComplete = (taskId) => {
        setTodoLists((prevtodoLists) =>
            prevtodoLists.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const editTask = (taskId, newTitle) => {
        setTodoLists((prevtodoLists) =>
            prevtodoLists.map((task) =>
                task.id === taskId ? { ...task, title: newTitle } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTodoLists(todoLists.filter((task) => task.id !== taskId));
    };

    const filteredtodoLists =
        toggle === 'completed' ? todoLists.filter((task) => task.completed) : todoLists;

        useEffect(() => {
            axios.get(todoListUrl).then((res) => {
                console.log("todos:", res?.data);
                const fetchedData = res?.data || [];
                if (toggle === 'completed') {
                    setTodoLists(fetchedData.filter(task => task.completed));
                } else {
                    setTodoLists(fetchedData);
                }
            }).catch((err) => {
                console.log("error:", err);
            });
        }, [toggle]);
        

    return (
        <div>
            <h1>Todo app</h1>
            <AddTodo
                newTodo={newTodo}
                setNewTodo={setNewTodo}
                addTask={addTask}
            />
            <Toggle
                setToggle={setToggle}
            />
            <EditDeleteTodos
                toggleComplete={toggleComplete}
                editTask={editTask}
                deleteTask={deleteTask}
                filteredtodoLists={filteredtodoLists}
            />
            <ul>
                {todoLists.map((item) => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        {item.completed ? " (Completed)" : " (Not Completed)"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
