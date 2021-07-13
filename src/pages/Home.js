import {useEffect, useState} from "react";
import {getGenres, getMovies} from "../services/API";
import FilmList from "../components/film-lists/FilmList";
import FilmItem from "../components/film-item/FilmItem";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [genters, setGenters] = useState([]);

    useEffect(() =>{ 
        getMovies().then(value => setMovies(value.data.results))
    },[])
    useEffect(() => {

        getGenres().then(value => setGenters(value.data.genres))
    },[])
    console.log(genters)
    return (
        <div>
            {
                <FilmList movies={movies}/>
            }
            {
                genters.map(value => <FilmItem genter={value}/>)
            }
        </div>
    );
}

// adult: false
// backdrop_path: "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg"
// genre_ids: (2) [28, 878]
// id: 588228
// original_language: "en"
// original_title: "The Tomorrow War"
// overview: "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet."
// popularity: 6606.621
// poster_path: "/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg"
// release_date: "2021-06-30"
// title: "The Tomorrow War"
// video: false
// vote_average: 8.4
// vote_count: 2135/\