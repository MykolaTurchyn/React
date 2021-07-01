import {useEffect, useState} from "react";
import Post from "../post/Post";
import {getPost} from "../../service/API";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPost().then(value => setPosts(value.data))
    }, [])
    return (
        <div>
            {
                posts.map((value, index) => <Post key={value.id} item={value} number={index} />)
            }
        </div>
    );
}