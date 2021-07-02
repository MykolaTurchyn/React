import {useState} from "react";
import Posts from "../posts/Posts";

export default function User ({item}) {
    let [toggle,setToggle] = useState('show')

    return(
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button
                onClick={() => {
                    setToggle(!toggle)
                }}
            >hide/show title</button>

            {toggle && <Posts item={item}/>}

        </div>
    );
}