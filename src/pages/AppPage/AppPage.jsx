import React, { Component } from 'react';
import AppList from "../../components/AppList/AppList"
import "../AppPage/AppPage.css"

class AppPage extends Component {
    render() {
        return (
            <div>
                <div>This is where the search bar will be</div>
                <h2>Put on your thinking app</h2>
                <div>
                    <h3>Your Apps</h3>
                </div>
                <div>
                    <h3>Apps we think you'll like</h3>
                    <AppList
                        user={this.props.user}
                        favApps={this.props.favApps}
                        handleFavApp={this.props.handleFavApp} />
                </div>
            </div>

        );
    }
}

export default AppPage;