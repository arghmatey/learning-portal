import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
            <header className="App-header">
                <div className="nav-app-logo">
                    <img alt="Grasp Logo" src="./icons/Logo.png" />
                </div>
                <div className="nav-links-wrapper">
                    <div className="nav-link">
                        <div className="active-page-indicator"></div>
                        <Link to='/'>
                            <img alt="Homepage icon" className="nav-link-icon" src="./icons/home.png" />
                            <span>Home</span>
                        </Link>
                    </div>
                    <div className="nav-link">
                        <div className="active-page-indicator"></div>
                        <Link to='/apps'>
                            <img alt="Apps page icon" className="nav-link-icon" src="./icons/apps.png" />
                            <span>Applications</span>
                        </Link>
                    </div>
                    <div className="nav-link">
                        <div className="active-page-indicator"></div>
                        <Link to='/progress'>
                            <img alt="Progress page icon" className="nav-link-icon" src="./icons/chart-line.png" />
                            <span>Progress</span>
                        </Link>
                    </div>
                    <div className="nav-link">
                        <div className="active-page-indicator"></div>
                        <Link to='/chat'>
                            <img alt="Chat page icon" className="nav-link-icon" src="./icons/forum.png" />
                            <span>Chat</span>
                        </Link>
                    </div>
                </div>
                <div className="nav-logout-link">
                    <div className="nav-link">
                        <Link to='' onClick={props.handleLogout}>
                            <img alt="Logout icon" className="nav-link-icon" src="./icons/logout.png" />
                            <span>Logout</span>
                        </Link>
                    </div>
                </div>
            </header>
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