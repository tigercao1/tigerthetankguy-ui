import React, { Component } from 'react';
import './Item.scss';

class Item extends Component {
    constructor(props) {
        super(props);
        this.icon = props.icon;
    }

    render() {
        return (
            <div className="item">
                <div className="item-icon">
                    {this.icon}
                </div>
                {/* TODO - on hover display menu item name */}
            </div>
        )
    }
}

export default Item;