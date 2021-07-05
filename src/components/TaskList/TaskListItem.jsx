// This component uses React Hooks

import React, { useState, useEffect } from "react";

function TaskListItem(props) {
    const [formData, setFormData] = useState(props.task)

    const handleChangeCompleted = e => {
        e.persist();
        setFormData(formData => ({...formData, completed: e.target.checked}));
    }

    const handleChangeText = e => {
        e.persist();
        setFormData(formData => ({...formData, text: e.target.value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.handleUpdateTask(formData)
    }

    return (
        <form autoComplete="off" onBlur={handleSubmit}>
            <li className="task-list-item">
                <div className="task-list-checkbox">
                    <input 
                        name="completed"
                        type="checkbox" 
                        checked={formData.completed}
                        onChange={handleChangeCompleted}
                        />
                </div> 
                <label className="task-list-text">
                    <input
                        name="text" 
                        type="text"
                        value={formData.text}
                        onChange={handleChangeText}
                        required
                    />
                </label>
            </li>
        </form>
    )
}

export default TaskListItem;