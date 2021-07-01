import axios from 'axios';

let url= {
    baseURL:'https://jsonplaceholder.typicode.com'
}
let axiosInstance = axios.create(url);

let getUsers = () =>axiosInstance('/users')
let getUser = (id) =>axiosInstance('/users/' + id)

export {getUsers, getUser}