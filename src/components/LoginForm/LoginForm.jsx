import React, { Component } from 'react';
import userService from '../../utils/userService';

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
            <div className="login-form-wrapper">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label className="login-label" htmlFor="email">Email address</label>
                        <input type="email" className="login-input" placeholder="learner@grasp.com" value={this.state.email} name="email" onChange={this.handleChange} />
                    
                        <label className="login-label" htmlFor="password">Password</label>
                        <input type="password" className="login-input" placeholder="" value={this.state.pw} name="pw" onChange={this.handleChange} />
                        <div className="forgot-password">
                            <div className="login-subtext">Forgot Password?</div>
                        </div>
                    </div>

                    <div className="button-wrapper">
                        <button className="login-button">LOGIN</button>
                        <div className="login-subtext">Don't have an account? <button type="button" className="view-change" onClick={this.props.handleViewChange} value="register">Create one</button></div>
                    </div>
                </form >
            </div>
        );
    }
}

export default LoginForm;