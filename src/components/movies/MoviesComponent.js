import {useDispatch, useSelector} from "react-redux";
import FilmItem from "../film-item/FilmItem";
import './MoviesStyle.css'
import {useEffect, useState} from "react";
import {getMovies} from "../../services/API";

export default function MoviesComponent() {
    const [moviesList, setMoviesList] = useState([]);
    const dispatch = useDispatch()


    useEffect(() => {
        getMovies().then(value => setMoviesList(value.data.results))
    }, [])

    dispatch({
        type: 'MOVIES',
        payload: moviesList
    })




    // useEffect(() => {
    //     getMoviesDetails().then(value => setMoviesDetails(value))
    // }, [])


    // dispatch({
    //     type: 'MOVIES-DETAILS',
    //     payload: getMoviesDetails()
    // })

    const movies = useSelector(({movies}) => movies);
    return (
        <div className={'listWraper'}>

            {
                    movies.map((value) =>
                        <div className={'itemWraper'} key={value.id}>
                            <FilmItem movieItem={value}/>
                        </div>
                )

            }

        </div>
    );
}