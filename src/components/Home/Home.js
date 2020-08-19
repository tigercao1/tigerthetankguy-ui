import React, { Component } from "react";
import Education from './../Education/Education';
import './Home.scss';


class Home extends Component {
    render() {
        return (
            <div className="home-body">
                <div className="home-title">
                    Tiger THE TANK GUY
                </div>
                <Education />
            </div>
        )
    }
}

export default Home;