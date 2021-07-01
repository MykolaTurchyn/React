import axios from 'axios';

let url = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}
let axiosInstance = axios.create(url);

let getUsers = () =>  axiosInstance('/users');

let getPostOfUser = () =>  axiosInstance('/posts/');

let getComments = (id) =>  axiosInstance('/posts/'+ id + '/comments');


export {getUsers,getPostOfUser, getComments};