import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleRegisterOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          Learning Portal
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <aside className="App-sidebar">
          <div>
            <h2>Passwords</h2>
          </div>
          <div>
            <h2>To-do</h2>
          </div>
        </aside>
        <main>
          <Route exact path='/register' render={({ history }) =>
            <RegisterPage
              history={history}
              handleRegisterOrLogin={this.handleRegisterOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleRegisterOrLogin={this.handleRegisterOrLogin}
            />
          } />
        </main>
      </div>
    )
  }
};

export default App; 