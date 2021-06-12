import React, { Component } from 'react';
import './HomePage.css';


class HomePage extends Component {
    render() {
        return (
            <>
           <div> <h3>Your Apps</h3>
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
                </div>
                
           <div>
               <img id='dashboard' alt="" src="./icons/pics/dashboard.png" />
           </div>
           </>
        );
    }
}

export default HomePage;