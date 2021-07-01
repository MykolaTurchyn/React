
import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../service/API";


export default function Users({userBTN}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value =>
            setUsers(value.data))
    }, [])
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value} />)
            }

        </div>

    );
}