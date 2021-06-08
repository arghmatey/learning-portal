import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from "../TodoList/TodoList"
import './Sidebar.css';

const Sidebar = (props) => {
    let sidebar = props.user ?
        <div className="sidebar-wrapper">
            <div className="user-wrapper">
                <img alt="User profile image" className="nav-link-icon" src="./icons/Avatar.png" />
                <span>{props.user.name}</span>
            </div>


            <div class="calendar">
                <div class="date-today">June 7, 2021</div>
                <div class="days">
                    <div class="weekday">
                    <div class="day-letter">M</div>
                    <div class="day-number">1</div>
                    </div>
                    <div class="weekday">
                    <div class="day-letter">Tu</div>
                    <div class="day-number">2</div>
                    </div>
                    <div class="weekday">
                    <div class="day-letter">W</div>
                    <div class="day-number">3</div>
                    </div>
                    <div class="weekday">
                    <div class="day-letter">Th</div>
                    <div class="day-number">4</div>
                    </div>
                    <div class="weekday">
                    <div class="day-letter">F</div>
                    <div class="day-number">5</div>
                    </div>
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