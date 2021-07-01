import React, {useState} from "react";
import {getUserInfo} from "../../service/API";

export default function User({item}) {
    const [userBtn, setUserBtn] = useState([]);
    // const [toggle, setToggle] = useState([]);

    function userBTN () {
        getUserInfo(item.id).then(value =>setUserBtn(value.data) )}

    return (
        <div>

            {item.id} - {item.name}

            <button onClick={userBTN}>Info</button>
            {
                userBtn.map(value => <div key={value.id}>{value.id} - {value.title}</div>)
            }
        </div>
    );
}