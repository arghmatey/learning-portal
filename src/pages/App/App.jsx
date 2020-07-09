import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Dashboard from '../Dashboard/Dashboard'
import userService from '../../utils/userService';
import favAppService from '../../utils/favAppService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      favApps: [],
      view: 'login',
      message: '',
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleRegisterOrLogin = () => {
    this.getFavList();
    this.setState({ user: userService.getUser() });
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  }

  handleViewChange = e => {
    let option = e.target.value;
    this.setState({ view: option });
  }

  handleFavApp = async favAppData => {
    const favApp = await favAppService.create(favAppData)
    this.setState(state => ({
      favApps: [...state.favApps, favApp]
    }));
  }

  getFavList = async () => {
    const favList = await favAppService.getFavList()
    this.setState({ favApps: favList })
  }

  render() {
    let app = this.state.user ?
      <div className="App">
        <Dashboard
          user={this.state.user}
          favApps={this.state.favApps}
          handleLogout={this.handleLogout}
          handleFavApp={this.handleFavApp}
          getFavList={this.getFavList}
        />
      </div>
      :
      <div className="App homepage">
        <header className="login-header">
          <nav className="login-nav">
            <img className="app-logo" alt="logo" src="./icons/Logo.png" />
            <div className="login-nav-links">
              <Link to=''>How It Works</Link>
              <Link to=''>Request a Demo</Link>
              <Link to=''>About Us</Link>
            </div>
          </nav>
        </header>
        <main className="App-main">
          <div className="view-wrapper">
            <div className="view-card">
              {
                this.state.view === 'login' ?
                  <LoginForm
                    history={this.history}
                    handleRegisterOrLogin={this.handleRegisterOrLogin}
                    handleViewChange={this.handleViewChange}
                  />
                  :
                  <RegisterForm
                    history={this.history}
                    handleRegisterOrLogin={this.handleRegisterOrLogin}
                    handleViewChange={this.handleViewChange}
                    updateMessage={this.updateMessage}
                  />
              }
            </div>
            <div className="statement">Digital learning all in one place. It's time to get a <span className="purple-text">grasp</span> on things.</div>
          </div >

        </main>
      </div>


    return (
      <div className="all-wrapper">
        {app}
      </div>
    );
  }
};

export default App; 