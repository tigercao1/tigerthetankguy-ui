import React, { Component } from "react";
import './Footbar.scss';

class Footbar extends Component {
    constructor(props) {
        super(props);
        this.linkedin = props.linkedin;
        this.github = props.github;
    }

    render() {
        return (
            <div className="footbar">
                <div className="footbar-body">
                    <a href={this.linkedin}>LinkedIn</a>
                    <div className="splitter-container">
                        <span className="splitter"></span>
                    </div>
                    <a href={this.github}>GitHub</a>
                </div>
            </div>
        )
    }
}

export default Footbar;