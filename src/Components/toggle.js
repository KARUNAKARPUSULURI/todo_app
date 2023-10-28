// Toggle.js
import React from "react";
import './toggle.css'; 

const Toggle = ({ setToggle }) => {
    return (
        <div>
            <button className="toggleBtn allTasksBtn" onClick={() => setToggle('all')}>
                All Tasks
            </button>
            <button className="toggleBtn completedTasksBtn" onClick={() => setToggle('completed')}>
                Completed Tasks
            </button>
        </div>
    )
};

export default Toggle;
