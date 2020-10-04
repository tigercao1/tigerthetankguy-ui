import React, { Component } from "react";
import "./Sidebar.scss";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.avatar = props.avatar;
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src={this.avatar} alt="avatar"/>
                </div>
                <div className="sidebar-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Sidebar;