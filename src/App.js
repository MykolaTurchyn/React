import {test} from "./services/API";

export default function App() {
    let id = 76341
    test(id).then(value => console.log(value))


    return (
        <div>

        </div>
    );
}
