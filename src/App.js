import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <ProSidebar breakPoint="md">
          <SidebarHeader className="side-bar-header">
            Tiger C.
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              <MenuItem icon={<FontAwesomeIcon icon={faHome}/>}>
                Home
                <Link to="/" />
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faFileAlt}/>}>
                Resume
                <Link to="/resume" />
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
        <Switch>
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
