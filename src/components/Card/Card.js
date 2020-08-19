import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.content = props.content;
    }

    render() {
        return (
            <div className="card-body">
                <div className="card-title">
                    {this.title}
                </div>

                <div className="card-content">
                    {this.content}
                </div>
            </div>
        )
    }
}

export default Card;