import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './ProgressPage.css';


class ProgressPage extends Component {
    render() {
        return (
           <div>
               <img id='dashboard' alt="" src="./icons/pics/progress.png" />
           </div>
        );
    }
}

export default ProgressPage;