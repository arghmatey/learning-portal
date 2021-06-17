import React from 'react';
import TaskList from '../TaskList/TaskList';
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

            <TaskList/>
        </div>
    );
};

export default Sidebar;