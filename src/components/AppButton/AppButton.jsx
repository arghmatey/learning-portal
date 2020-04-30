import React, { Component } from "react";
import { Link } from 'react-router-dom';



export default class AppButton extends Component {
    render() {
        return(
            <Link to="{this.props.url}">
                <Image src="{this.props.img}" className="githubIcon" />
            </Link>
        )
    }
    
}


