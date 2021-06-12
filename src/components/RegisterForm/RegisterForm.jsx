import React, { Component } from 'react';
import userService from '../../utils/userService';

class RegisterForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.register(this.state);
            this.props.handleRegisterOrLogin();
            this.props.history.push('/');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConfirm);
    }

    render() {
        return (
            <div className="register-form-wrapper">
                <form autocomplete="off" className="register-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label className="register-label" for="text">Name</label>
                        <input type='text' className="register-input" value={this.state.name} name='name' onChange={this.handleChange} />

                        <label for="email" className="register-label">Email address</label><br />
                        <input type="email" className="register-input" value={this.state.email} name="email" onChange={this.handleChange} />
                        
                        <label for="password" className="register-label">Password</label>
                        <input type="password" className="register-input" placeholder="" value={this.state.password} name="password" onChange={this.handleChange} />
                        
                        <label for="passwordConfirm" className="register-label">Confirm Password</label>
                        <input type="password" className="register-input" placeholder="" value={this.state.passwordConfirm} name="passwordConfirm" onChange={this.handleChange} />
                    </div>
                    
                    <div className="button-wrapper">
                        <button className="register-button" disabled={this.state.invalidForm}>Register</button>
                        <div className="register-subtext">Already have an account? <button type="button" className="view-change" onClick={this.props.handleViewChange} value="login">Login</button></div>
                    </div>
                </form >
            </div>
        );
    }
}

export default RegisterForm;