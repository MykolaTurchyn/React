import React, {useEffect, useState} from "react";
import {getUser} from "../services/API";
import {useParams} from "react-router-dom";

export default function UsersDetails(props) {
    let [user,setUser] = useState([]);
    let {id} = useParams();


    useEffect(() =>getUser(id).then(value => {
        setUser({...value.data})
    }),[id]);
    return (
        <div>
            <div><h5>{user.id}- {user.name} {user.username}</h5></div>
        </div>
    );
}