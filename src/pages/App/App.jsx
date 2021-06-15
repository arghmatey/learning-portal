import React, { Component } from 'react';
import './App.css';
import Dashboard from '../Dashboard'
import userService from '../../utils/userService';
import favAppService from '../../utils/favAppService';
import LoginPage from '../LoginPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      view: 'login',
      favApps: [],
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
        <Dashboard
          user={this.state.user}
          favApps={this.state.favApps}
          handleLogout={this.handleLogout}
          handleFavApp={this.handleFavApp}
          getFavList={this.getFavList}
        />
      :
      <LoginPage                            
        history={this.history}
        view={this.state.view}
        handleRegisterOrLogin={this.handleRegisterOrLogin}
        handleViewChange={this.handleViewChange}
        updateMessage={this.updateMessage}
      />

    return (
      <div className="all-wrapper">
        {app}
      </div>
    );
  }
};

export default App; 