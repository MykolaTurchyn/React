import React, {useEffect, useState} from "react";
import FilmList from "../components/film-lists/FilmList";
import {getMovies} from "../services/API";
import './HomeStyles.css'

export const Home = () => {
    const [movies, setMovies] = useState([]);
    // const [isloading, setIsLoading] = useState(null);

    useEffect(() =>
            getMovies().then(value => {
                setMovies(value.data.results)
            })
        , [])


    return (
        <div className={'listWrap'}>
                <div>
                    {
                        movies.map((value) =>
                            <FilmList key={value.id} items={value}/>)
                    }
                </div>
        </div>

    )
}