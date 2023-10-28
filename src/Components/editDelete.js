import React from "react";

const EditDeleteTodos = ({toggleComplete, editTask, deleteTask, filteredTasks}) => {
    return (
        <>
            {filteredTasks?.map((task) => (
                <li
                    key={task?.id}
                    style={{ backgroundColor: task?.completed ? 'lightgreen' : 'transparent' }}
                >
                    <input
                        type="checkbox"
                        checked={task?.completed}
                        onChange={() => toggleComplete(task.id)}
                    />
                    <span>{task?.completed ? <s>{task?.title}</s> : task?.title}</span>
                    <button onClick={() => editTask(task?.id, prompt('Edit task:', task?.title))}>
                        Edit
                    </button>
                    <button onClick={() => deleteTask(task?.id)}>Delete</button>
                </li>
            ))}
        </>
    )
};

export default EditDeleteTodos;