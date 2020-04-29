import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from '../../components/Sidebar/Sidebar';
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
        <div className="header-wrapper">
          <header className="App-header">
            Learning Portal
          <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          </header>
        </div>
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
        <div className="aside-wrapper">
          <aside className="App-aside">
            <Sidebar
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          </aside>
        </div>
      </div>
    )
  }
};

export default App; 