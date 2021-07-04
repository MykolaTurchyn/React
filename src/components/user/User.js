import React from "react";
import {Link} from "react-router-dom";

export default function User({item:{name,id}}) {
    return (
        <div>
            {id} - {name} - <Link to={'/users/' +id}> user page</Link>
        </div>
    );
}