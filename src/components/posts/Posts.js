import './PostsStyle.css'
import {useState} from "react";

export default function Posts({item}) {

    return (
        <div >
            <p >
                {item.userId} - {item.id} - {item.title}
            </p>



        </div>
    )

}