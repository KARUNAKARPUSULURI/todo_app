import React from "react";
import "./addTodo.css"

const AddTodo = ({ newTodo, setNewTodo, addTask, error }) => {
    return (
        <>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
                className={error ? "input-error" : ""}
            />
            {error && <p className="error-message">{error}</p>}
            <button className="add_btn" onClick={addTask}>Add</button>
        </>
    )
};

export default AddTodo;