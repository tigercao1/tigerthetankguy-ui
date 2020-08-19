import React from 'react';
import './App.scss';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <ProSidebar breakPoint="md">
        <SidebarHeader className="side-bar-header">
          Tiger C.
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem icon={<FontAwesomeIcon icon={faHome}/>}>Home</MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faAlignJustify}/>}>Resume</MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}

export default App;
