import React, { Component } from 'react';
import './LoginPage.css'
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class LoginPage extends Component {

    state = {
        view: 'login',
    };

    handleViewChange = e => {
        let option = e.target.value;
        this.setState({ view: option })
    }

    render() {
        return (
            <div className="view-wrapper">
                {
                    this.state.view === 'login' ?
                        <LoginForm
                            history={this.props.history}
                            handleRegisterOrLogin={this.props.handleRegisterOrLogin}
                            handleViewChange={this.handleViewChange}
                        />
                        :
                        <RegisterForm
                            history={this.props.history}
                            handleRegisterOrLogin={this.props.handleRegisterOrLogin}
                            handleViewChange={this.handleViewChange}
                        />
                }
            </div >
        );
    }
}

export default LoginPage;