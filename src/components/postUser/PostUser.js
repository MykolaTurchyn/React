import {useState} from "react";
import PostInfo from "../postInfo/PostInfo";

export default function PostUser ({item, num}) {
    const [toggle2, setToggle2] = useState(false);

    return(
        <div>
            {num} - {item.title} <button onClick={() => {
            setToggle2(!toggle2)
        }}> More-more </button>
            {toggle2 && <PostInfo item={item}/>}
        </div>
    );
}