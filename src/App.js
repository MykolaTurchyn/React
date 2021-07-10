// import {useCallback, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";

// const Test = () => {
//     const StoreCounter = useSelector(({counter}) => counter)
//     const dispatch = useDispatch();
//
//     const dec = useCallback(() => dispatch({type: 'DEC'}),[dispatch]);
//     const inc = useCallback(() => dispatch({type: 'INC'}),[dispatch]);
//     const reset = useCallback(() => dispatch({type: 'RESET'}),[dispatch]);
//
//     return (
//         <div>
//             <h1>{StoreCounter}</h1>
//             <button onClick={inc}>inc</button>
//             <button onClick={dec}>dec</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
// }

import {useDispatch, useSelector} from "react-redux";

const Trying = () => {
    let storeCounter = useSelector(({counter}) => counter)
    const dispatch = useDispatch();

    const inc = () => dispatch({type: 'INC'})
    const dec = () => dispatch({type: 'DEC'})
    const reset = () => dispatch({type: 'RESET'})
    return (
        <div>
            <h1>{storeCounter}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
            <button onClick={reset}>reset</button>


        </div>
    )
}
export default function App() {
    // const [counter, setCounter] = useState(0);
    // return (
    //     <div>
    //         <h1>{counter}</h1>
    //         <button onClick={() => setCounter((prev) => prev + 1)}>inc</button>
    //         <button onClick={() => setCounter((prev) => prev- 1)}>dec</button>
    //         <button onClick={() => setCounter((prev) => 0)}>reset</button>
    //         <Test/>
    //     </div>
    return (
        <div>
            <Trying/>
        </div>
    );
}