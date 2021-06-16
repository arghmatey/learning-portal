import React from 'react';
import TodoList from '../TodoList/TodoList';
import Calendar from './Calendar';
import './Sidebar.css';

const Sidebar = (props) => {

    return (
        <div className="sidebar-wrapper">
            <div className="user-wrapper">
                <img alt="User profile avatar" className="nav-link-icon" src="./icons/Avatar.png" />
                <span>{props.user.name}</span>
            </div>

            <Calendar />

            <div className="todo-wrapper">
                <TodoList/>
            </div>
        </div>
    );
};

export default Sidebar;