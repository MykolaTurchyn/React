import {useState} from "react";

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

        </div>
    );
}