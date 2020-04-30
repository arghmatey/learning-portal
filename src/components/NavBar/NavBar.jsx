import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
        <div className="nav-links">
            <Link to=''><div className="temp-wrapper"><img alt="X" className="nav-icon" src="./icons/home.png" /></div></Link>
            <Link to='/applications'><div className="applications"><img alt="X" className="nav-icon" src="./icons/apps.png" /></div></Link>
            <Link to=''><div className="temp-wrapper"><img alt="X" className="nav-icon" src="./icons/progress.png" /></div></Link>
            <Link to=''><div className="temp-wrapper"><img alt="X" className="nav-icon" src="./icons/message.png" /></div></Link>
            <Link to=''><div className="temp-wrapper"><img alt="X" className="nav-icon" src="./icons/logout.png" /></div></Link>
            <Link to='' onClick={props.handleLogout} className="neon-nav">Logout</Link>
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