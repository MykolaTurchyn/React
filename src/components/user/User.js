import React from "react";
import {Link} from "react-router-dom";

export default function User({item:{name,id}}) {
    return (
        <div>
            <b>{id} - {name}</b> <Link to={'/users/' + id} > User Posts </Link>
            <hr/>

        </div>
    );
}