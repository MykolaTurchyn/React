import './PostsStyle.css'
import {useState} from "react";

export default function Posts({item}) {

    return (
        <div >
            <p className={'show'}>
                {item.userId} - {item.id} - {item.title}
            </p>

            <button
                onClick={() => {
                    if (toggle === 'hide') {
                        setToggle('show')
                    } else if (toggle === 'show') {
                        setToggle('hide')
                    }console.log(toggle)
                }}
            >hide/show title</button>
        </div>
    )

}