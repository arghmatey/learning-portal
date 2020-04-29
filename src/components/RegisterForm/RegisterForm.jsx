import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <div>
                <header>Sign Up</header>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} />
                    <input type='email' placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange} />
                    <input type="password" placeholder='Password' value={this.state.password} name='password' onChange={this.handleChange} />
                    <input type="password" placeholder='Password' value={this.state.passwordConf} name='passwordConf' onChange={this.handleChange} />
                    <button type="submit" disabled={this.state.invalidForm}>Register</button>&nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                </form>
            </div>
        );
    }

}

export default RegisterForm;