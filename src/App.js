import React from "react";
import Main from "./layout/Main";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
    return (
        <Router>
            <Main title={"Hello world"} content={"Hello."}/>
        </Router>
    );
}

export default App;