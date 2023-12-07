// Toggle.js
import React, { useState } from "react";
import './toggle.css'; 

const Toggle = ({ setToggle }) => {
  const [activeButton, setActiveButton] = useState('all');

  const handleButtonClick = (buttonType) => {
    setToggle(buttonType);
    setActiveButton(buttonType);
  };

  return (
    <div>
      <button
        className={`toggleBtn allTasksBtn ${activeButton === 'all' ? 'active' : ''}`}
        onClick={() => handleButtonClick('all')}
      >
        All Tasks
      </button>
      <button
        className={`toggleBtn completedTasksBtn ${activeButton === 'completed' ? 'active' : ''}`}
        onClick={() => handleButtonClick('completed')}
      >
        Completed Tasks
      </button>
    </div>
  );
};

export default Toggle;
