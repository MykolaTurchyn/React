import axios from 'axios';

let url =
    {
        baseURL: 'https://jsonplaceholder.typicode.com'
    }
const axiosInstance = axios.create(url);

let getUsers = () => axiosInstance('/users');

let getPosts = (id) => axiosInstance('/users/' + id + '/posts');

let getComments = (id) => axiosInstance('/posts/' + id + '/comments');


export {getUsers,getPosts,getComments};