import axios from 'axios';

let url = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}
const axiosInstance = axios.create(url)

const getUsers = () => axiosInstance('/users')

const getUserInfo = (id) => axiosInstance('/users/' + id+ '/posts')

let getPost = () => axiosInstance('/posts');

let getPostInfo = (id) => axiosInstance('/posts/' + id + '/comments');

let getComments = () => axiosInstance('/comments');



export {getUsers, getPost, getComments,getUserInfo,getPostInfo};
