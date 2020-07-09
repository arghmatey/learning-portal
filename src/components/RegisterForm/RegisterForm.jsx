import React, { Component } from 'react';
import './RegisterForm.css';
import userService from '../../utils/userService';

class RegisterForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
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
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
            <div className="register-form">
                <form autocomplete="off" onSubmit={this.handleSubmit} >
                    <label for="text">Name</label><br />
                    <input type='text' value={this.state.name} name='name' onChange={this.handleChange} />
                    <label for="email">Email address</label><br />
                    <input type="email" className="form-control" value={this.state.email} name="email" onChange={this.handleChange} />
                    <br />
                    <label for="password">Password</label>
                    <br />
                    <input type="password" className="form-control" placeholder="" value={this.state.password} name="password" onChange={this.handleChange} />
                    <br />
                    <label for="passwordConf">Confirm Password</label>
                    <br />
                    <input type="password" className="form-control" placeholder="" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                    <br />
                    <div className="register-button">
                        <button className="rb" type="submit" disabled={this.state.invalidForm}>Register</button>
                    </div>
                    <div className="q-wrap"><span>Already have an account? <button type="button" className="view-change" onClick={this.props.handleViewChange} value="login">Login</button></span></div>
                </form >
            </div>
        );
    }

}

export default RegisterForm;