import React, { Component } from 'react';
import apps from "../../utils/data.js"

export default class AppList extends Component {

    render() {
        return (
            <div className="application-info">
                {apps.map(app =>
                    <div className="application-details">
                        <a href={app.url}>
                            <img alt={app.name} src={app.img} className="appButton" />
                        </a>
                        <div>{app.name}</div>
                    </div>
                )}
            </div>
        )
    }
}
