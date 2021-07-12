import './FilmItems.css'
export default function FilmItem({item}) {

    const {item:{overview, original_title, release_date, vote_average, vote_count, poster_path}} = {item}
    // "id": 399566,
    //     "original_language": "en",
    //     "original_title": "Godzilla vs. Kong",
    //     "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
    //     "popularity": 1170.852,
    //     "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
    //     "release_date": "2021-03-24",
    //     "title": "Godzilla vs. Kong",
    //     "video": false,
    //     "vote_average": 8,
    //     "vote_count": 6324

    return (
        <div className={'thise'}>
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