import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience'
import Resume from './components/Resume/Resume';
import Sidebar from './components/Sidebar/Sidebar';
import Item from './components/Sidebar/Item';
import { faHome, faInfoCircle, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footbar from './components/Footbar/Footbar'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Titlebar from './components/Titlebar/Titlebar';

function App() {
  const myLinkedIn = "https://www.linkedin.com/in/yizhang-tiger-cao";
  const myGithub = "https://github.com/tigercao1";
  return (
    <div className="App">
      <Router>
        <Sidebar avatar={"https://raw.githubusercontent.com/tigercao1/tigerthetankguy-ui/master/src/assets/images/my_photo.png"}>
          <Link to="/" ><Item icon={<FontAwesomeIcon icon={faHome} color="white"/>}/></Link>
          <Link to="/experience"><Item icon={<FontAwesomeIcon icon={faBriefcase} color="white"/>}/></Link>
        </Sidebar>
        <Switch>
          <div className="main">
            <Titlebar title={"Home"}></Titlebar>
            <Route exact path="/" component={Home} />
            <Route path="/experience" component={Experience} />
            <Footbar linkedin={myLinkedIn} github={myGithub}></Footbar>
          </div>
        </Switch>
        <div className="right-bar">
          <div className="bar-container">
            <a href={myGithub}><FontAwesomeIcon icon={faGithub}/></a>
          </div>
          <div className="bar-container">
            <a href={myLinkedIn}><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
