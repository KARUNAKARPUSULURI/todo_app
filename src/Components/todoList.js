import React, { useEffect, useState } from "react";
import axios from "axios";
import { todoListUrl } from "../Constants/constants";
import AddTodo from "./addTodo";
import Toggle from "./toggle";
import EditDeleteTodos from "./editDelete";
import todoListLogo from "../images/logo-black.png"
import "./styles.css";

const TodoList = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [toggle, setToggle] = useState('all');
  const [error, setError] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") {
      setError("Task cannot be empty!");
      return;
    }

    const taskId = new Date().getTime();

    setTodoLists([
      ...todoLists,
      { id: taskId, title: newTodo, completed: false },
    ]);
    setNewTodo("");
    setError("");
  };

  const toggleComplete = (taskId) => {
    setTodoLists((prevTodoLists) =>
      prevTodoLists.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId, newTitle) => {
    setTodoLists((prevTodoLists) =>
      prevTodoLists.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTodoLists(todoLists.filter((task) => task.id !== taskId));
  };

  const filteredTodoLists =
    toggle === 'completed'
      ? todoLists.filter((task) => task.completed)
      : todoLists;

  useEffect(() => {
    if (todoLists.length === 0) {
      axios.get(todoListUrl)
        .then((res) => {
          console.log("todos:", res?.data);
          const fetchedData = res?.data || [];
          setTodoLists(fetchedData);
        })
        .catch((err) => {
          console.log("error:", err);
        });
    }
  }, [todoLists, todoListUrl]);

  return (
    <div>
      <h1>Todo app</h1>
      <img src={todoListLogo} alt="this is a logo of todolist"/>
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTask={addTask} error={error} />
      <Toggle setToggle={setToggle} />
      <EditDeleteTodos
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTask={deleteTask}
        filteredTasks={filteredTodoLists}
      />
    </div>
  );
};

export default TodoList;
