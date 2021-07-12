import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function Counter() {
    const counter = useSelector((
        {counter: {value}}) => value);
    let [numbers, setNumbers] = useState({});

    let [xxx, setXxx] = useState(0);

    const dispatch = useDispatch()
    const zzz = () => setXxx(numbers.value)

    function onSubmit(e) {
        e.preventDefault();
    }



    const onNumberChange = ({target: {value}}) => setNumbers({...numbers, value})

    console.log(numbers, 'numbers')
    console.log(xxx, 'xxx')
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => dispatch({type: 'INC'})}>INCRYMENT</button>
            <br/><br/>
            <button onClick={() => dispatch({type: 'DEC'})}>DECRYMENT</button>
            <br/><br/>
            <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
            <br/><br/>

            <h2>{+xxx}</h2>

            <form onSubmit={onSubmit}>
                <input type="number" name={'number'} value={numbers.value} onChange={onNumberChange}/><br/>
                <button onClick={zzz}>Custom</button>
            </form>
        </div>
    );
}