import React from "react";

const AddTodo = ({newTodo, setNewTodo, addTask}) => {
    return (
        <>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add</button>
        </>
    )
};

export default AddTodo;