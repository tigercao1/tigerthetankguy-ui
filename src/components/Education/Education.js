import React, { Component } from 'react';
import Card from './../Card/Card';

class Education extends Component {
    constructor(props) {
        super(props);
        this.title = "Education";
    }

    render() {
        return (
            <div className="education-body">
                <Card title={this.title}/>
            </div>
        )
    }
}

export default Education;