import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from '../../components/Sidebar/Sidebar';
import AppPage from '../AppPage/AppPage';
import HomePage from '../HomePage/HomePage';
import ChatPage from '../ChatPage/ChatPage';
import ProgressPage from '../ProgressPage/ProgressPage';
import './Dashboard.css';

class Dashboard extends Component {

    render() {
        return (
            <div className="App">
                <div className="header-wrapper">
                    <header className="App-header">
                        <img className="app-logo" alt="logo" src="./icons/Logo.png" />
                        <NavBar
                            user={this.props.user}
                            handleLogout={this.props.handleLogout}
                        />
                    </header>
                </div>
                <main className="Dash-main">      
                    <Route exact path='/homepage' render={() =>
                        <HomePage
                            user={this.props.user}
                            favApps={this.props.favApps}
                            handleFavApp={this.props.handleFavApp}
                            getFavList={this.props.getFavList}
                        />
                    }
                    />

                    <Route exact path='/progress' render={() =>
                        <ProgressPage
                            user={this.props.user}
                            favApps={this.props.favApps}
                            handleFavApp={this.props.handleFavApp}
                            getFavList={this.props.getFavList}
                        />
                    }
                    />
                    <Route exact path='/chat' render={() =>
                        <ChatPage
                            user={this.props.user}
                            favApps={this.props.favApps}
                            handleFavApp={this.props.handleFavApp}
                            getFavList={this.props.getFavList}
                        />
                    }
                    />
                    <Route exact path='/applications' render={() =>
                        <AppPage
                            user={this.props.user}
                            favApps={this.props.favApps}
                            handleFavApp={this.props.handleFavApp}
                            getFavList={this.props.getFavList}
                        />
                    }
                    />
                </main>
                <div className="aside-wrapper">
                    <aside className="App-aside">
                        <Sidebar
                            user={this.props.user}
                            handleLogout={this.handleLogout}
                        />
                    </aside>
                </div>
            </div>
        )
    }
};

export default Dashboard; 