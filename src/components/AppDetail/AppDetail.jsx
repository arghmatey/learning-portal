import React, { Component } from "react";


export default class AppButton extends Component {
    render() {
        return (
            <div className="application-details">
                <a href={this.props.url}>
                    <img alt={this.props.name} src={this.props.img} className="application-image" />
                </a>
                <div>{this.props.name}</div>
            </div>
        )
    }
}