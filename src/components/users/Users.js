import React from "react";
import {useEffect, useState} from "react";
import {getUsers} from "../services/API";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UsersDetails from "../user-details/UsersDetails";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => getUsers()
            .then(value => {
            setUsers([...value.data])
        }), []
    )
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
            <Switch>
                <Route path={'/users/:id'} component={UsersDetails}/>
            </Switch>
        </div>
    );
}