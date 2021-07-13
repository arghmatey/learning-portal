// This page uses React Hooks

import React, { useEffect, useState } from 'react';

const ChatPage = () => {

    return (

        <div className="chatWrapper">
            <div className="chatWindow">
                <div className="messagesWrapper">
                    {/* {props.messages.map((message, idx) => (
                        props.username === message.user
                            ?
                            <div key={idx} className="userMessage" >
                                <h4>{message.user}</h4>
                                <div>{message.text}</div>
                            </div>
                            :
                            <div key={idx} className="chatMessage">
                                <h4>{message.user}</h4>
                                <div>{message.text}</div>
                            </div>
                    ))} */}
                </div >

                <div className="usersWrapper">
                    <div>
                    <h3>ROOM NAMES</h3>
                    <h3>
                        DMs HERE
                        {/* {props.users.map(user => (
                            <div key={user.id}>{user.username}</div>
                        ))} */}
                    </h3>
                    </div>
                </div>

                <div className='newWrapper'>
                    <input
                        placeholder='Type your message here...'
                        className='newMessage'
                        // value={props.message}
                        // onChange={e => props.setMessage(e.target.value)}
                        // onKeyPress={e => e.key === 'Enter' ? props.sendMessage(e) : null} 
                    />
                    <button
                        className='messageSend'
                        type='submit'
                        // onClick={e => props.sendMessage(e)}
                        >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;