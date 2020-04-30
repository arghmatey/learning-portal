import React, { Component } from "react";

export default class AppButton extends Component {
    render() {
        return (
            <div className="appButton">
                <>

                    <a href={this.props.url}>
                        <img alt={this.props.name} src={this.props.img} className="appButton" />
                    </a>
                    {this.props.name}
                </>
            </div>
        )
    }

}
