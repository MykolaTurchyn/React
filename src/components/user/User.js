import React from "react";
import {Link} from "react-router-dom";
import './userStyle.css'

export default function User({item: {name, id}}) {
    return (
        <div>
            <div>
                <b>{id} - {name}</b> <Link to={'/users/' + id} className={'link effect'}> User Posts </Link>



            </div>
        </div>
    );
}