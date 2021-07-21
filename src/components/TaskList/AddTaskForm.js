// This component uses React Hooks. 

import React, { useState, useRef, useEffect } from 'react';

const AddTaskForm = (props) => {
    const [formData, setFormData] = useState({
        completed: false,
        text: ''
    });

    const focusedInput = useRef(null);

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
        props.handleAddTask(formData);
    }

    useEffect(() => {
        focusedInput.current.focus();
    }, []);

    return (
        <form autoComplete="off" onBlur={handleSubmit}>
            <li className="task-list-item">
                <div className="task-list-checkbox">
                    <input
                        name="completed"
                        type="checkbox" 
                        checked={formData.completed}
                        onChange={handleChangeCompleted}/>
                </div> 
                <label className="task-list-text">
                    <textarea
                        ref={focusedInput}
                        className="task-list-text-input"
                        name="text"
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