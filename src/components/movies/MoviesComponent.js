import {useDispatch, useSelector} from "react-redux";
import FilmItem from "../film-item/FilmItem";
import './MoviesStyle.css'
import {useEffect, useState} from "react";
import {getGenres, getMovies, getMoviesDetails} from "../../services/API";

export default function MoviesComponent() {
    const [genresList, setGenresList] = useState([]);
    const [moviesList, setMoviesList] = useState([]);
    const dispatch = useDispatch()


    useEffect(() => {
        getMovies().then(value => {
            // console.log(value.data.results)
            setMoviesList(value.data.results)
        }
        )
    }, [])

    dispatch({
        type: 'MOVIES',
        payload: moviesList
    })
    useEffect(() => {
        getGenres().then(value => {
            // console.log(value.data.genres)
            setGenresList(value.data.genres)
        })

    }, [])
    dispatch({
        type: 'GENRES',
        payload: genresList
    })



    const genre = useSelector(({genres}) => genres);
    const movies = useSelector(({movies}) => movies);
    return (
        <div className={'listWraper'}>
            {
                    movies.map((value) =>
                        <div className={'itemWraper'} key={value.id}>
                            <FilmItem movieItem={value} genreItem={genre}/>
                        </div>
                )

            }
            {/*{*/}
            {/*    genre.map((value) =>*/}
            {/*        <div key={value.id}>*/}
            {/*            <FilmItem genreItem={value}/>*/}
            {/*        </div>*/}
            {/*    )*/}

            {/*}*/}

        </div>
    );
}