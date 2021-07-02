import {useEffect, useState} from "react";
import Posts from "../posts/Posts";

export default function GetPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                    setPosts(value)
                }
            );
    }, []);

    return (
        <div>
            {

                posts.map(value => <Posts key={value.id} item={value}/>)

            }
        </div>
    );
}