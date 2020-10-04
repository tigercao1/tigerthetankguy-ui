import React, { Component } from "react";
import Card from './../Card/Card';
import './Home.scss';


class Home extends Component {

    homeMsg = (
        <p>
            Software Engineer.
            <br/><br/>
            Determination.
            <br/><br/>
            Full-Stack.
            <br/><br/>
            Passion.
            <br/><br/>
            Me.
        </p>
    )
    render() {
        return (
            <div className="home-body">
                <Card 
                    cardType="home"
                    title={"Hi! I'm Tiger!"}
                    content={this.homeMsg}></Card>
            </div>
        )
    }
}

export default Home;