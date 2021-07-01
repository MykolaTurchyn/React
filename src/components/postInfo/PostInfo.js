import {useEffect, useState} from "react";
import {getComments} from "../service/API";
import Info from "../info/Info";

export default function PostInfo ({item}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(item.id).then(value => {
            setComments(value.data)
        })
    }, [])
    return(
        <div>
            {
                comments.map((value,index) => <Info key={index} item={value} number={index + 1}/>)
            }
        </div>
    );
}