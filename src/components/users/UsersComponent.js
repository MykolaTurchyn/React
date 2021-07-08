import {useState} from "react";
import {useSelector} from "react-redux";

export default function UsersComponent() {
    const users = useSelector(({users}) => users)

    let [toggle, setToggle] = useState(false);

    return (
        <div>

            <button onClick={() => setToggle(!toggle)}>Users</button>

            <ol>

                {users.map(user => (
                    toggle && <li key={user.id}>
                        <b>Name:</b> {user.name}, <br/>
                        <b> Email: </b> {user.email}<br/>
                    </li>
                ))}
            </ol>

        </div>
    );
}