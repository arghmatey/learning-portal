import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
        <div className="nav-links">
            <Link to=''><div className="temp-wrapper"><img alt="X" className="nav-icon" src="" /></div></Link>
            <Link to=''><div className="temp-wrapper"><img alt="X" className="nav-icon" src="" /></div></Link>
            <Link to=''><div className="temp-wrapper"><img alt="X" className="nav-icon" src="" /></div></Link>
            <Link to=''><div className="temp-wrapper"><img alt="X" className="nav-icon" src="" /></div></Link>
        </div>
        :
        <div>
            no user logged in
        </div>;

    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;