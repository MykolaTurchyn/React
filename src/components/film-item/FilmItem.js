import './FilmItem.css';
import {useEffect, useState} from "react";
import {getMoviesDetails} from "../../services/API";
import {useDispatch} from "react-redux";
import MovieDetails from "../movies-details/MovieDetails";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const imgBuild = (posterPath, size = 200) => `http://image.tmdb.org/t/p/w${size}${posterPath}`

export default function FilmItem({movieItem, genreItem}) {
    const [moviesDetails, setMoviesDetails] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        getMoviesDetails(movieItem.id).then(value => setMoviesDetails(value))
    }, [])

    console.log(moviesDetails)
    dispatch({
        type: 'MOVIES-DETAILS',
        payload: moviesDetails
    })
    // console.log({movieItem})
    // console.log({genreItem})

    // if(movieItem.genre_ids === value.id){
    //
    // }

    return (
        <div className={'filmItem'}>
            <div className={'image'}
                 style={{backgroundImage: `url(${imgBuild(movieItem.poster_path)})`}}
                 onClick={() => <MovieDetails moviesDetails={moviesDetails}/>}>
            </div>
            <div>
                <h2>{movieItem.original_title}</h2>


                <span><b>Rating:</b> {movieItem.vote_average} (total votes : {movieItem.vote_count})</span>
                <p><b>Overview:</b> {movieItem.overview}</p>
                <span><b>Release Data:</b> {movieItem.release_date}</span>
            </div>
        </div>
    );
}