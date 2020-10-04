import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.content = props.content;
        this.cardType = props.cardType;
    }

    render() {
        return (
            <div className={`card-body ${this.props.cardType ? this.props.cardType : ""}`}>
                <div className="card-title">
                    {this.title}
                </div>
                <span className="splitter"></span>
                <div className="card-content">
                    {this.content}
                </div>
                
            </div>
        )
    }
}

export default Card;