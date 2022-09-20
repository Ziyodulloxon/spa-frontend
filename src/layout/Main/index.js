import React from "react";
import {Container, Content, Header} from "rsuite";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Sidebar from "../Sirdebar";
import Users from "../../pages/users";
import 'rsuite/dist/rsuite.min.css';
import './index.css';

const Main = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <Sidebar expand={expand} setExpand={setExpand}/>
                <Routes>
                    <Route path='/users' element={
                        <Container>
                            <Users/>
                        </Container>
                    }/>
                    <Route path='/' element={
                        <Container>
                            <Header>
                                <h2>Home</h2>
                            </Header>
                            <Content>
                                Hello world
                            </Content>
                        </Container>
                    }/>
                </Routes>
            </Container>
        </div>
    );
};

export default Main;