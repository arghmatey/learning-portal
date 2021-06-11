import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';


class LoginPage extends Component {

    render() {
        return (
            <div className="login-page">
                <header className="login-header">
                    <img style={{height: "125px"}} alt="Grasp Logo" src="./icons/Logo.png" />
                </header>
                <main className="login-main">
                    <div className="view-wrapper">
                    <div className="view-card">
                        {
                        this.props.view === 'login' ?
                            <LoginForm
                            history={this.history}
                            handleRegisterOrLogin={this.props.handleRegisterOrLogin}
                            handleViewChange={this.props.handleViewChange}
                            />
                            :
                            <RegisterForm
                            history={this.history}
                            handleRegisterOrLogin={this.props.handleRegisterOrLogin}
                            handleViewChange={this.props.handleViewChange}
                            updateMessage={this.props.updateMessage}
                            />
                        }
                    </div>
                    <div className="statement">Digital learning all in one place. It's time to get a <span className="purple-text">grasp</span> on things.</div>
                    </div >

                </main>
            </div>
        )
    }
}

export default LoginPage;