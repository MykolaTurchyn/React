import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/users/Users";
import React from "react";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                    {/*<Route path={'/users/:id'} component={UsersDetails}/>*/}
                </Switch>
            </div>
        </Router>
    );
}