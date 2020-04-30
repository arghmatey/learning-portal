import React, { Component } from 'react';
import AppList from "../../components/AppList/AppList"
import "../AppPage/AppPage.css"

class AppPage extends Component {
    render() {
        return (
            <div>
                <h2>Put on your thinking app</h2>
                <div>
                    <h3>Your Apps</h3>
                    <div> {
                        this.props.favApps.length > 0 ?
                            this.props.favApps.map(app =>
                                <>
                                    <a href={app.url}>
                                        <img alt={app.name} src={app.img} className="appButton" />
                                    </a>
                                    {app.name}
                                </>
                            )
                            : <div>add an app</div>}
                    </div>
                    <div>
                        <h3>Apps we think you'll like</h3>
                        <AppList
                            user={this.props.user}
                            favApps={this.props.favApps}
                            handleFavApp={this.props.handleFavApp}
                            getFavList={this.props.getFavList}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppPage;