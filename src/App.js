import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Sidebar from './components/Sidebar/Sidebar';
import Item from './components/Sidebar/Item';
import avatar from './assets/images/my_photo.png'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Titlebar from './components/Titlebar/Titlebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar avatar={avatar}>
          <Item icon={<FontAwesomeIcon icon={faHome} color="white"/>}>
            <Link to="/" />
          </Item>
          <Item icon={<FontAwesomeIcon icon={faInfoCircle} color="white"/>}>
          </Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </Sidebar>
        <Switch>
          <div className="main">
            <Titlebar title={"Home"}></Titlebar>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
          </div>
        </Switch>
        <div className="right-bar"></div>
      </Router>
    </div>
  );
}

export default App;
