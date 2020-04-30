import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './ChatPage.css';


class ChatPage extends Component {
    render() {
        return (
           <div>
               <img id='dashboard' alt="" src="./icons/pics/chat.png" />
           </div>
        );
    }
}

export default ChatPage;