import React, { Component } from "react";
import './Cardgroup.scss';
import Card from "../Card/Card";

class Cardgroup extends Component {

    render() {
        return (
            <div className="card-group">
                <div className="row">
                    <Card cardType="group" className="card-left"></Card>
                    <span className="space"></span>
                    <Card cardType="group" className="card-right"></Card>
                </div>
                <span className="space"></span>
                <div className="row">
                    <Card cardType="group" className="card-left"></Card>
                    <span className="space"></span>
                    <Card cardType="group" className="card-right"></Card>
                </div>
            </div>
        )
    }
}

export default Cardgroup;