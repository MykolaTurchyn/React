import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function Counter() {
    const counter = useSelector((
        {counter: {value}}) => value);
    let [numbers, setNumbers] = useState({number: ''});
    const dispatch = useDispatch()


    function onSubmit(e) {
        console.log(e.target.number)
        e.preventDefault();
        console.log(numbers)
    }

    function onNumberChange(e) {
        setNumbers(e.target)
}
return (
    <div>
        <h2>{counter}</h2>
        <button onClick={() => dispatch({type: 'INC'})}>INCRYMENT</button>
        <br/><br/>
        <button onClick={() => dispatch({type: 'DEC'})}>DECRYMENT</button>
        <br/><br/>
        <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
        <br/><br/>

        <form onSubmit={onSubmit}>
            <input type="number" name={'number'} value={numbers} onChange={onNumberChange}/><br/>
            <button>Custom INC</button>
        </form>
    </div>
);
}