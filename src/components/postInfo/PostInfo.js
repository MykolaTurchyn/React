import {useEffect, useState} from "react";
import Info from "../info/Info";
import {getComments} from "../../service/API";

export default function PostInfo ({item}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(item.id).then(value => {
            setComments(value.data)
        })
    }, [item.id])
    return(
        <div>
            {
                comments.map((value,index) => <Info key={index} item={value} number={index + 1}/>)
            }
        </div>
    );
}