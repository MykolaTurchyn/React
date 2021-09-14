import {useEffect, useState} from "react";
import {getUsers, postNewUser} from "./services/user";

export default function App() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            console.log(value)
            setUsers(value)
        })
    }, []);

    function save(e) {
        // e.preventDefault()
        let name = e.target.name.value
        postNewUser({name})
    }

    return (
        <div>
                <form onSubmit={save}>
                    <input type="text" name="name"/>
                    <button>Save</button>
                </form>

            {
                users.map(value => <div key={value.id}>{value.id} - {value.name}</div >)
            }
        </div>
    );
}