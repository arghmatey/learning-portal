import React, { Component } from 'react';
import AppButton from "../AppButton/AppButton"
import apps from "../../data.js"

export default class AppList extends Component {

    render() {
        return (
            <div className="appList">
                {apps.map(app =>
                    <>
                        <AppButton
                            url={app.url}
                            img={app.img}
                            name={app.name}
                        />
                        <button onClick={() => this.props.handleFavApp({
                            favoritedBy: this.props.user,
                            name: app.name,
                            url: app.url,
                            img: app.img
                        })}>Add
                    </button>
                    </>
                )
                }
            </div>
        )
    }
}
