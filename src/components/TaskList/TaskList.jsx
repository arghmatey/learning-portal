import React, { Component } from "react";
import tasksService from "../../utils/tasksService";
import TaskListItem from "./TaskListItem";
import AddTaskForm from "./AddTaskForm";

import "./TaskList.css";

class TaskList extends Component {
    state = {
        tasks: [],
        form: []
    }

    handleAddTask = async (formData) => {
        const newTask = await tasksService.create(formData, this.props.user._id);
        this.setState({
            tasks: [...this.state.tasks, newTask],
            form: []
        });
    }

    addNewTaskForm = e => {        
        const form = this.state.form;
        this.setState({
            form: form.concat(<AddTaskForm handleAddTask={this.handleAddTask}/>)
        });
    }

    handleUpdateTask = async (updatedTaskData, index) => {
        const updatedUser = await tasksService.update(updatedTaskData, this.props.user._id);
        const updatedTasksArray = this.state.tasks;
        updatedTasksArray[index] = updatedUser.tasks[index]
        this.setState(
            {tasks: updatedTasksArray}
        )
      };

    async componentDidMount() {
        const tasks = await tasksService.getAll(this.props.user._id);
        this.setState({ tasks: tasks })
      }

    render() {
        return (

            <div className="task-component-wrapper">
                <div className="task-decoration"></div>
                <div className="task-wrapper">
                    <div className="task-header">
                        <h3>Tasks</h3>
                        <button className="add-task-button" onClick={this.addNewTaskForm}>+</button>
                    </div>
                    <div className="task-list-wrapper">
                        <ul className="task-list">
                            {this.state.tasks.map((task, idx) => (
                                <TaskListItem
                                    task={task}
                                    key={task._id}
                                    index={idx}
                                    handleUpdateTask={this.handleUpdateTask}
                                />
                            ))}
                            {this.state.form}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskList;