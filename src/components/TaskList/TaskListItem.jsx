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

    const handleSubmit = index => e => {
        e.preventDefault();
        props.handleUpdateTask(formData, index)
    }

    return (
        <form autoComplete="off" onBlur={handleSubmit(props.index)}>
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
                    <textarea
                        className="task-list-text-input"
                        name="text"
                        rows="1"
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