// import {useEffect, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {getGenres} from "../../services/API";
// import FilmItem from "../film-item/FilmItem";
// import GenreItem from "../genre-item/GenreItem";
//
// export default function Gener () {
//     const [genresList, setGenresList] = useState([]);
//     const [genres, setGenres] = useState([]);
//     const dispatch = useDispatch()
//
//     useEffect(() => {
//         getGenres().then(value => {
//             console.log(value.data.genres)
//             setGenresList(value.data.genres)
//         })
//
//     }, [])
//     dispatch({
//         type: 'GENRES',
//         payload: genresList
//     })
//     const genre = useSelector(({genres}) => genres);
//     return(
//            <div>
//                {
//                    genre.map((value) =>
//                        <div className={'itemWraper'} key={value.id}>
//                            <GenreItem genreItem={value}/>
//                        </div>
//                    )
//
//                }
//            </div>
//           );
// }