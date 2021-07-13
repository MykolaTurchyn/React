import './FilmItems.css'

export default function FilmItem({movie,}) {
    const {movie: {overview, original_title, release_date, vote_average, vote_count, poster_path}} = {movie}
    // const {genter:{name}}=genter
    return (
        <div className={'qwerty'}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={`${poster_path}`}/>
            </div>

            <div>
                <h2>{original_title}</h2>
                <p>Rating: {vote_average} (total votes : {vote_count})</p>
                <p>Overview: {overview}</p>
                <p>Release Data : {release_date}</p>
            </div>
        </div>
    );
}