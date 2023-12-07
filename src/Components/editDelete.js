import React, { useState } from "react";
import "./styles.css";

const EditDeleteTodos = ({ toggleComplete, editTask, deleteTask, filteredTasks }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const handleEditStart = (taskId, title) => {
    setEditingTask(taskId);
    setEditedTitle(title);
  };

  const handleEditCancel = () => {
    setEditingTask(null);
    setEditedTitle("");
  };

  const handleEditSave = (taskId) => {
    editTask(taskId, editedTitle);
    setEditingTask(null);
    setEditedTitle("");
  };

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
          {editingTask === task.id ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <button onClick={() => handleEditSave(task.id)}>Save</button>
              <button onClick={handleEditCancel}>Cancel</button>
            </>
          ) : (
            <>
              <span>{task?.completed ? <s>{task?.title}</s> : task?.title}</span>
              <button onClick={() => handleEditStart(task?.id, task?.title)}>
                Edit
              </button>
              <button onClick={() => deleteTask(task?.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </>
  );
};

export default EditDeleteTodos;
