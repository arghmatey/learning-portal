import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
        <div className="nav-links">
            <Link to=''><div className="temp-wrapper"><img alt="home" className="nav-icon" src="./icons/home.png" />Home</div></Link>
            <Link to=''><div className="temp-wrapper"><img alt="apps" className="nav-icon" src="./icons/apps.png" />Applications</div></Link>
            <Link to=''><div className="temp-wrapper"><img alt="progress" className="nav-icon" src="./icons/chart-line.png" />Progress</div></Link>
            <Link to=''><div className="temp-wrapper"><img alt="chat" className="nav-icon" src="./icons/forum.png" />Chat</div></Link>
            <Link to='' onClick={props.handleLogout} className="logout-link"><img alt="logout" className="logout-icon" src="./icons/logout.png" />Logout</Link>
        </div>
        :
        <div>
            <Link to='/login' className="neon-nav">Login</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className="neon-nav">Signup</Link>
        </div>;

    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;