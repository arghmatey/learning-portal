import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import TodoList from "../TodoList/TodoList"
import './Sidebar.css';

const Sidebar = (props) => {
    let sidebar = props.user ?
        <div className="sidebar-wrapper">
            <div className="user-wrapper">
                <span>Welcome, {props.user.name}</span>&nbsp;
                <button className="dropdown-button">⌄</button>
            </div>
            <div className="cal-wrapper">
                <div>
                    
                    <Calendar />
                </div>
            </div>
            <div className="todo-wrapper">
                
                <TodoList/>
            </div>
        </div>
        :
        <div>
            <Link to='/login'>Login</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/register'>Register</Link>
        </div>;

    return (
        <div>
            {sidebar}
        </div>
    );
};

export default Sidebar;