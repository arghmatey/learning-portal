import React, { Component } from 'react';
import AppButton from "../AppButton/AppButton"
import apps from "../../utils/data.js"

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
                        <button style={{"height" : "20%", "borderRadius": "20%", "fontSize" : "10px", "margin" : "1.5% .2% 1% 0%"}} onClick={() => this.props.handleFavApp({
                            favoritedBy: this.props.user,
                            name: app.name,
                            url: app.url,
                            img: app.img
                        })}>Add to Favs
                    </button>
                    </>
                )
                }
            </div>
        )
    }
}
