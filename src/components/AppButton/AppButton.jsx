import React, { Component } from "react";
import { Link } from 'react-router-dom';




export default class AppButton extends Component {
    render() {
        return(
            <div className="appButton">
                <>
                
            <a href={this.props.url}>
                <img src={this.props.img} className="appButton" />
            </a>
                {this.props.name}
            
            </>
            </div>
        )
    }
    
}
