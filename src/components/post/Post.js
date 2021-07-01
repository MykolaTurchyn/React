import React, {useState} from "react";
import {getPostInfo} from "../../service/API";

export default function Post({item}) {


    const [postBtn, setPostBtn] = useState([]);

    function postBTN(id) {
        getPostInfo(id).then(value => {

            setPostBtn(value.data)
        })
    }

    return (
        <div>

            {item.id} - {item.title}

            <button onClick={() => postBTN(item.id)}>Info</button>

            {
                postBtn.map(value => <div key={value.id}>{value.id} - {value.name}</div>)
            }
        </div>
    );
}