import './FilmItem.css';
import GenreItem from "../genre-item/GenreItem";
import {useState} from "react";

const imgBuild = (posterPath, size = 200) => `http://image.tmdb.org/t/p/w${size}${posterPath}`

export default function FilmItem({movieItem}) {
    // const [qwe,setQwe] = useState();
    // console.log(genterItem.name)
    // setQwe(movieItem.genre_ids)
    // console.log(qwe)
    return (
        <div className={'filmItem'}>
            <div className={'image'}
                 style={{
                     backgroundImage: `url(${imgBuild(movieItem.poster_path)})`
                 }}>
                {/*<img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={`${poster_path}`}/>*/}
            </div>
            {/*<GenreItem genre_ids={qwe}/>*/}
            <div>
                <h2>{movieItem.original_title}</h2>
                <span>Rating: {movieItem.vote_average} (total votes : {movieItem.vote_count})</span>
                <p>Overview: {movieItem.overview}</p>
                <span>Release Data : {movieItem.release_date}</span>
            </div>
        </div>
    );
}