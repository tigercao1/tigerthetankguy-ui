import React, { Component } from 'react';
import Cardgroup from '../Cardgroup/Cardgroup';
import './Experience.scss'

class Experience extends Component {
    constructor(props) {
        super(props);
        this.title = "Experience";
    }

    render() {
        return (
            <div className="experience">
                <Cardgroup/>
            </div>
        )
    }
}

export default Experience;