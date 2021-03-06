// This component uses React Hooks. 

import React, { useState, useEffect } from 'react';

const AddTaskForm = (props) => {
    const [formData, setFormData] = useState({
        completed: false,
        text: ''
    })

    const handleChangeText = e => {
        e.persist();
        setFormData(formData => ({...formData, text: e.target.value}));
    }

    const handleChangeCompleted = e => {
        e.persist();
        setFormData(formData => ({...formData, completed: e.target.checked}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.handleAddTask(formData)
    }

    return (
        <form autoComplete="off" onBlur={handleSubmit}>
            <li className="add-task-list-item">
                <div className="task-list-checkbox">
                    <input
                        name="completed"
                        type="checkbox" 
                        checked={formData.completed}
                        onChange={handleChangeCompleted}/>
                </div> 
                <label className="task-list-text">
                    <textarea
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

export default AddTaskForm;