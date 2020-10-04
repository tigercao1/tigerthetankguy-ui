import React, { Component } from 'react';
import './Titlebar.scss';

class Titlebar extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <div className="titlebar">
                <span className="title">{this.title}</span>
            </div>
        )
    } 
}

export default Titlebar