import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getComments} from "../../services/API";

export default function PostComments(props) {
    let {id} = useParams();

    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments(id)
            .then(value =>
                setComments(value.data))
    }, [id])
    return (
        <div>

            {
                comments.map(value =>
                    <div key={value.id}>
                        <b>
                            Id: {value.id}<br/>
                            Name: {value.name}<br/>
                            Email: {value.email}<br/>
                            Body: {value.body}<br/>
                        </b>
                    </div>)
            }
        </div>
    );
}
