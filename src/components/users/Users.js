import {useEffect, useState} from "react";
import {getUsers} from "../../services/API";
import User from "../user/User";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserPosts from "../user-posts/UserPosts";
import PostComments from "../post-comments/PostComments";


export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])
    return (
        <Router>

            <div>
                {
                    users.map(value => <User key={value.id} item={value}/>)
                }
                <Switch>
                    <Route path={'/users/:id'} component={UserPosts}/>
                    <Route path={'/posts/:id/comments'} component={PostComments}/>
                </Switch>
            </div>
        </Router>
    );
}