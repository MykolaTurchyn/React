import {useDispatch, useSelector} from "react-redux";
import FilmItem from "../film-item/FilmItem";
import './MoviesStyle.css'
import {useEffect, useState} from "react";
import {getGenres, getMovies} from "../../services/API";

export default function MoviesComponent() {
    const [genresList, setGenresList] = useState([]);
    const [moviesList, setMoviesList] = useState([]);
    const dispatch = useDispatch()

    function getMovie() {
        getMovies().then(value => {
                setMoviesList(value.data.results)
            }
        )
    }

    function getGenre() {
        getGenres().then(value => {
            setGenresList(value.data.genres)
        })
    }

    useEffect(() => {
        getMovie();
        getGenre();
    }, [])
    dispatch({
        type: 'MOVIES',
        payload: moviesList
    })
    const movies = useSelector(({movies}) => movies);
    return (
        <div className={'listWraper'}>
            {
                movies.map((value) =>
                    <div className={'itemWraper'} key={value.id}>
                        <FilmItem movieItem={value} genreItem={genresList}/>
                    </div>
                )
            }
        </div>
    );
}