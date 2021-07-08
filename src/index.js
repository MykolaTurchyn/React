import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";


const initialState =
    {
        counter: {
            value: 0
        },
        users: [],
        posts: [],
        comments: [],
    }
//  Incryment
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1
                }
            }
        }

        // Decryment
        case 'DEC': {
            return {
                ...state,
                counter: {
                    value: state.counter.value - 1
                }
            }
        }

        // Reset
        case 'RESET': {
            return {
                ...state,
                counter: {
                    value: 0
                }
            }
        }

        case 'Add_Users': {
            return {
                ...state,
                users: action.payload
            }
        }

        case 'Add_Posts': {
            return {
                ...state,
                posts: action.payload
            }
        }
        case 'Add_Comments' : {
            return {
                ...state,
                comments: action.payload
            }
        }
        case 'Add_Custom_INC' : {
            return {
                ...state,
                numbers: action.payload
            }
        }

        default:
            return state;
    }
}


const store = createStore(reducer);

// store.subscribe(() =>{
//     console.log(store.getState())
// })
//
// store.dispatch({
//     type: 'INC'
// });
//
//
// store.dispatch({
//     type: 'INC'
// });

// console.log(store.getState())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
