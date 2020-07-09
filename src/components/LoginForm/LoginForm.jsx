import React, { Component } from 'react';
import userService from '../../utils/userService';
import './LoginForm.css';

class LoginForm extends Component {

    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            console.log('made it this far');
            this.props.handleRegisterOrLogin();
            this.props.history.push('/');
        } catch (err) {
            console.log('Invalid login');
        }
    }

    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.handleSubmit} >
                    <label for="email">Email address</label><br />
                    <input type="email" className="form-control" placeholder="learner@grasp.com" value={this.state.email} name="email" onChange={this.handleChange} />
                    <br />
                    <br />
                    <label for="password">Password</label>
                    <br />
                    <input type="password" className="form-control" placeholder="" value={this.state.pw} name="pw" onChange={this.handleChange} />
                    <div className="pword-forgot">
                        <span>Forgot Password?</span>
                    </div>
                    <br />
                    <div className="login-button">
                        <button className="lb">Log In</button>
                    </div>
                    <span>Don't have an account? <button type="button" className="view-change" onClick={this.props.handleViewChange} value="register">Create one</button></span>
                </form >
            </div>
        );
    }
}

export default LoginForm;