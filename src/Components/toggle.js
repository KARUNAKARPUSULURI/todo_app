import React from "react";

const Toggle = ({ setToggle }) => {
    return (
        <>
            <div>
                <button onClick={() => setToggle('all')}>All Tasks</button>
                <button onClick={() => setToggle('completed')}>Completed Tasks</button>
            </div>
        </>
    )
};

export default Toggle;