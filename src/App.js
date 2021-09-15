import {useEffect, useState} from "react";
import {getCars, postCar} from "./services/cars-api";

export default function App() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => {
            console.log(value)
            setCars(value)
        })
    }, [])

    function sendCar(e) {
        e.preventDefault()
        console.log(e)
        const model = e.target.name.value;
        postCar({model})
    }

    return (
        <div>
            <form onClick={sendCar}>
                <input type="text" name="name"/>
                <button>send</button>
            </form>

            {
                cars.map(value => <div key={value.id}>
                    Car lot: {value.id}
                    <br/>Car model: {value.model}
                </div>)
            }
        </div>
    );
}