import React, { Component } from 'react';
import AppDetail from './AppDetail';
import apps from '../utils/data.js';

export default class AppList extends Component {

    render() {
        return (
            <div className="application-info">
                {apps.map(app =>
                    <AppDetail 
                        name={app.name}
                        url={app.url}
                        img={app.img}
                    />
                )}
            </div>
        )
    }
}
