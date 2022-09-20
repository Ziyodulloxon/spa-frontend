import React from "react";
import {Nav, Sidebar, Sidenav} from "rsuite";
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import {Link} from "react-router-dom";
import NavToggle from "../NavToggle";
import "./index.css";

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
};

const MySidebar = ({expand, setExpand}) => (
    <Sidebar
        style={{display: 'flex', flexDirection: 'column'}}
        width={expand ? 260 : 56}
        collapsible
    >
        <Sidenav.Header>
            <div style={headerStyles}>
                <span style={{marginLeft: 12}}> SPA</span>
            </div>
        </Sidenav.Header>
        <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
            <Sidenav.Body>
                <Nav>
                    <Nav.Item eventKey="1" as={Link} to="/" active icon={<DashboardIcon/>}>
                        Dashboard
                    </Nav.Item>
                    <Nav.Item as={Link} to="/users" eventKey="2"  icon={<GroupIcon/>}>
                        Users List
                    </Nav.Item>
                </Nav>
            </Sidenav.Body>
        </Sidenav>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)}/>
    </Sidebar>
);

export default MySidebar;