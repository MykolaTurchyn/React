import {useState} from "react";
import Posts from "../posts/Posts";

export default function User ({item}) {
    let [toggle,setToggle] = useState(false)

    return(
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button
                onClick={() => {
                    setToggle(!toggle)
                }}
            >Hide / Show</button>

            {toggle && <Posts item={item}/>}

        </div>
    );
}