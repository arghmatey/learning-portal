import React, { Component } from 'react';
import AppButton from "../AppButton/AppButton"
import apps from "../../data.js"

export default class AppList extends Component {
    render() {
        return(
            <div>
                {apps.map(app => 
                <AppButton
                    url={app.url}
                    img={app.img}
                />
                )}
            </div>
        )
    }
}
