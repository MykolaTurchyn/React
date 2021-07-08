import {useSelector} from "react-redux";
import {useState} from "react";

export default function PostsComponent() {
    const posts = useSelector(({posts}) => posts)
    let [togglePosts, setTogglePosts] = useState(false);


    return (
        <div>
            <button onClick={() => setTogglePosts(!togglePosts)}>Posts</button>
            <ul>
                {posts.map(post => (
                    togglePosts && <li key={post.id}>
                        <b>Title:</b> {post.title},<br/>
                        <b>Body:</b> {post.body}<br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}