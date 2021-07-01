import PostsUsers from "../postsUsers/PostsUsers";
import {useState} from "react";

export default function User({item}) {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <h3>{item.id}</h3>
            Name : {item.name}<br/>
            Surname : {item.username}<br/>
            Email : {item.email}<br/>
            <button onClick={ () => {
                setToggle(!toggle)
            }}> More</button>
            {toggle && <PostsUsers userId={item.id}/>}
            <hr/>
        </div>
    );
}