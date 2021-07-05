import React, { useState, useEffect } from "react";

function TaskListItem(props) {
    const [formData, setFormData] = useState(props.task)

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
                        checked={props.task.completed}
                        onChange={props.handleChangeCompleted(props.index)}
                        />
                </div> 
                <label className="task-list-text">
                    <input
                        name="text" 
                        type="text"
                        value={props.task.text}
                        onChange={props.handleChangeTaskText(props.index)}
                        required
                    />
                </label>
            </li>
        </form>
    )
}

export default TaskListItem;