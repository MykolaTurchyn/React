import {useEffect, useState} from "react";
import {getUser, getUsers} from "./service/API";
import Users from "./components/users/Users";

export default function App() {
    const [user, setUser] = useState([]);

    let appFunc = (id) => {
        getUser(id).then(value => {
            setUser(value.data)
        })
    }


    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data)
        })
    }, [])

    return (
        <div>
            {
                <Users items={users} appFunc={appFunc}/>
            }
            {
                user && <div><h3>{user.name}</h3></div>
            }
        </div>
    )
};
