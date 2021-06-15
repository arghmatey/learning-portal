import React, { Component } from 'react';
import AppList from '../../components/AppList/AppList';

class HomePage extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="home-search">Search bar</div>
                <h2 className="home-welcome">Welcome back, {this.props.user.name}</h2>
                <h3>Favorite Apps</h3>
                <AppList
                    user={this.props.user}
                    favApps={this.props.favApps}
                    handleFavApp={this.props.handleFavApp} 
                />
            </div>
        );
    }
}

export default HomePage;