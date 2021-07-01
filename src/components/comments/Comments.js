import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import {getComments} from "../../service/API";

export default function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments(value.data))
    }, [])
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}