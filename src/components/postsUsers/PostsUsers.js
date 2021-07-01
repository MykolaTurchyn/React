import {useEffect, useState} from "react";
import {getPostOfUser} from "../service/API";
import PostUser from "../postUser/PostUser";

export default function PostsUsers({userId}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostOfUser().then(value => {
            setPosts(value.data)
        })
    }, [])

    const filter = posts.filter(value => value.userId === userId)

    return (
        <div>
            {
                filter.map((value, index) => <PostUser key={value.id} item={value} num={index + 1}/>)
            }
        </div>
    );
}