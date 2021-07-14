import axios from 'axios';

let url = {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjYwNDMxYjNkYWE0NmRjYmJmZjI1MzI4ZWEwNmZjZiIsInN1YiI6IjYwZDQ0YjI4NjNhNjk1MDAxZGJhNTM4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ir_gpla53fJHXn0bzF576J56DPHs7ZUcz2ZdkYUMWQE`
    }
}

const axiosInstance = axios.create(url);

const getMovies = () => axiosInstance('/discover/movie');
const getGenres = () => axiosInstance('/genre/movie/list');

const getMoviesDetails = (movie_id) => axiosInstance('/movie/' + movie_id);

export {getMovies, getMoviesDetails, getGenres}
