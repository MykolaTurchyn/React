import Users from "./components/users/Users";
import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import "./App.css";

export default function App() {

    return (
        <Router>

            <div>
                <Link to={'/users'} className={'link effect'} > Users </Link>
            </div>
            <Switch>
                <Route path={'/users'} component={Users}/>
            </Switch>
        </Router>
    );
}