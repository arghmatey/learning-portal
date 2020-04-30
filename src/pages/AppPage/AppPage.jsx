import React, { Component } from 'react';
import AppList from "../../components/AppList/AppList"
import "../AppPage/AppPage.css"

class AppPage extends Component {
    render() {
        return (
            <div>
                <h2>Put on your thinking app</h2>
                    <div>
                        <h3>Apps we think you'll like</h3>
                            <AppList/>
                    </div>
            </div>
            
        );
    }
}

export default AppPage;