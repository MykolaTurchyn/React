import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getPosts} from "../../services/API";

export default function UserPosts(props) {
    let {id} = useParams();

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(id)
            .then(value =>
                setPosts(value.data))
    }, [id]);
    return (
        <div>
            {
                posts.map(value =>
                    <div key={value.id}>

                        <h5>
                            ID: {value.id} <br/>
                            Title: {value.title} <br/>
                            Body: {value.body}<br/>
                            <Link to={'/posts/' + id +'/comments'}> User Comments</Link>
                        </h5>

                    </div>
                )
            }
        </div>
    );
}