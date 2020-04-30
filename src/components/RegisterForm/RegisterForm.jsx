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
            <div className="register-form">
                <form onSubmit={this.handleSubmit} >
                    <label for="text">Name</label><br />
                    <input type='text' value={this.state.name} name='name' onChange={this.handleChange} />
                    <label for="email">Email address</label><br />
                    <input type="email" className="form-control" value={this.state.email} name="email" onChange={this.handleChange} />
                    <br />
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
                        <button type="submit" disabled={this.state.invalidForm}>Register</button>
                    </div>
                    <span>Already have an account? <Link to=''>Login</Link></span>
                </form >
            </div>
        );
    }

}

export default RegisterForm;