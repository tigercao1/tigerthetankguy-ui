import React, { Component } from 'react';
import './Resume.scss';

class Resume extends Component {
    render() {
        return (
            <div className="resume-body">
                <div className="topheader">
                    <h2>Yizhang Cao</h2>
                    <hr size="2" color="black"/>
                </div>
                
                <div className="content" >
                    <div className="header">EDUCATION</div>
                    <div className="title">Bachelor of Computer Science, Mobile Computing Stream, Co-op</div>
                    <div className="row">
                        <div className="column-left">Carleton University, Ottawa, ON</div>
                        <div className="column-right">Expected Graduation: April 2021</div>
                    </div>
                    <ul>
                        <li>
                            3rd Year Undergraduate, CGPA 11/12 (A)
                        </li>
                    </ul>
    
                    <div className="header">ACHIEVEMENTS</div>
                    <ul>
                        <li>Dean’s Honor List, Carleton University Entrance Scholarship, Lester Bowles Pearson Scholarship, Frederick William Baldwin Scholarship</li>
                    </ul>
    
                    <div className="header">TECHNICAL SKILLS</div>
                    <ul>
                        <li>Programming Languages: JavaScript, Sass, HTML5, Java, Groovy</li>
                        <li>Tools and Framworks: Git, Aurelia, Node.js, Android Studio, Jenkins</li>
                    </ul>
    
                    <div className="header">WORK EXPERIENCE</div>
                    <div className="title">Java Software Developer Intern</div>
                    <div className="row">
                        <div className="column-left">Trend Micro, Kanata Ontario</div>
                        <div className="column-right">January 2019 – April 2019</div>
                    </div>
                    <ul>
                        <li>Implemented pop up window for product deployment script in Java Server Pages</li>
                        <li>Refactored product deployment script generation logic on both frontend using JavaScript and backend using Java</li>
                        <li>Constructed Jenkins pipeline from scratch using Groovy, the pipeline deploys production version product onto a Kubernetes cluster and performs upgrade test before an upgrade is rolled out</li>
                    </ul>
                    <div className="title">Junior Software Developer</div>
                    <div className="row">
                        <div className="column-left">Solace Cloud, Kanata, Ontario</div>
                        <div className="column-right">May 2018 – December 2018</div>
                    </div>
                    <ul>
                        <li>Feature development on Single Page Application using Aurelia Framework with JavaScript</li>
                        <li>Implemented a Cloud Formation template enables static website hosting on S3 bucket using Cloud Front and Route 53 on AWS which enables deployment of production Single Page Application on AWS</li>
                        <li>Worked with Spring boot server, JPQL and MySQL during backend development</li>
                        <li>Implemented new RESTAPIs to update service name, service parameters, retrieve service specifications, create new services</li>
                        <li>Written Ansible scrips automating EC2 provisioning</li>
                        <li>Used Git daily for project version controls</li>
                    </ul>
                    <div className="title">Teaching Assistant</div>
                    <div className="row">
                        <div className="column-left">School of Computer Science, Carleton University, Ottawa, Ontario</div>
                        <div className="column-right">May 2018 – December 2018</div>
                    </div>
                    <ul>
                        <li>Held assignment workshops every week to enhance students’ understanding of the requirements and identified common issues and resolved them</li>
                        <li>Conducted office hour weekly to clarify course materials and assignment issues to students in a one-to-one manner</li>
                        <li>Marked assignments and quizzes and given detailed feedback</li>
                    </ul>
                    <div className="header">EXTRA-CURRICULAR ACTIVITIES</div>
                    <ul>
                        <li>Hack the North 2018</li>
                        <li>CUHacking 2018 (General Category 3rd place)</li>
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default Resume;