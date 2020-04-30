import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
        <>
            <div className="nav-links">
                <Link to=''><div className="temp-wrapper"><img alt="X" src="./icons/home.png" />Home</div></Link>
                <Link to='/applications'><div className="temp-wrapper"><img alt="X" src="./icons/apps.png" />Applications</div></Link>
                <Link to=''><div className="temp-wrapper"><img alt="X" src="./icons/chart-line.png" />Progress</div></Link>
                <Link to=''><div className="temp-wrapper"><img alt="X" src="./icons/forum.png" />Chat</div></Link>
            </div>
            <br></br><br></br><br></br><br></br><br></br>
            <div className="logoutlink">
            <hr/>
            <div className="logout-link">
                <Link to='' onClick={props.handleLogout}><div className="temp-wrapper"><img alt="X" src="./icons/logout.png" />Logout</div></Link>
            </div>
            </div>
        </>
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