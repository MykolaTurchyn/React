import axios from 'axios';

let url = {
    baseURL: 'http://jsonplaceholder.typicode.com'
}
let axiosInstance = axios.create(url);

let getUsers = () =>  axiosInstance('/posts');
let getUser = (id) =>  axiosInstance('/posts/'+ id);

export {getUsers,getUser};