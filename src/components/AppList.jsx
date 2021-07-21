import React, { Component } from 'react';
import AppDetail from './AppDetail';
import apps from '../utils/data.js';

export default class AppList extends Component {

    // handles horizontal scrolling of app list
    handleWheel = e => {
        e.currentTarget.scrollLeft += e.deltaY;
    }

    render() {
        return (
            <div className="application-info" onWheel={this.handleWheel}>
                {apps.map((app, idx) =>
                    <AppDetail 
                        name={app.name}
                        url={app.url}
                        img={app.img}
                        key={idx}
                    />
                )}
            </div>
        )
    }
}