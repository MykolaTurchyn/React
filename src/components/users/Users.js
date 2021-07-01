import User from "../user/User";

export default function Users ({items,appFunc}) {
    return(
        <div>
            {
                items.map((value) => <User key={value.id} item={value} appFunc={appFunc}/>)
            }
        </div>
    );
}