import React from "react";
import "./addTodo.css"

const AddTodo = ({newTodo, setNewTodo, addTask}) => {
    return (
        <>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button className="add_btn" onClick={addTask}>Add</button>
        </>
    )
};

export default AddTodo;