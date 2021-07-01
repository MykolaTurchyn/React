import {useEffect, useState} from "react";
import {getUser, getUsers} from "./service/API";
import Posts from "./components/posts/Posts";

export default function App() {

    const [post, setPost] = useState([]);

    let appClick = (id) => {
        getUser(id).then(value => {
            console.log(value.data)
            setPost(value.data)
        })
    }


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            console.log(value)
            setPosts(value.data)
        })
    }, [])
    return (
        <div>
            {
                <Posts items={posts} postsClick={appClick}/>
            }
            {
                post && <div>{post.body}</div>
            }

        </div>
    );
}