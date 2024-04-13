import React, { useState } from 'react'

const TaskForm = ({ onAdd }) => {
    // Manages the state of the new task name
    const [taskName, setTaskName] = useState('');

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        onAdd(taskName); // Call the provided onAdd function with the task name
        setTaskName(''); // Clear the input field after submission
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={taskName} onChange={e => setTaskName(e.target.value)} // Update taskName on input change
                placeholder="Your Next Task.." />
                <button>Add Task</button>
            </form>

        </>
    );
}

export default TaskForm