import './FilmItem.css';
import {useState} from "react";
import Gener from "../genre/Gener";

const imgBuild = (posterPath, size = 200) => `http://image.tmdb.org/t/p/w${size}${posterPath}`

export default function FilmItem({movieItem, genreItem}) {
    const [toggele, setToggele] = useState(false);


    return (
        <div className={'filmItem'}>
            <div className={'image'}
                 style={{backgroundImage: `url(${imgBuild(movieItem.poster_path)})`}}>
            </div>
            <div>
                <h3 style={{textAlign:'center'}}>{movieItem.original_title}</h3>
                <Gener genreItem={genreItem} genreIds={movieItem.genre_ids}/>  <br/>

                <button onClick={() => {
                    setToggele(!toggele)
                }} style={{display:"flex",justifySelf:'center'}}>More Info
                </button>
                <br/>


                {
                    toggele &&
                    <div>
                        <span><b>Rating:</b> {movieItem.vote_average} (total votes : {movieItem.vote_count})</span>
                        <p><b>Overview:</b> {movieItem.overview}</p>
                        <span><b>Release Data:</b> {movieItem.release_date}</span>
                    </div>
                }
            </div>
        </div>
    );
}