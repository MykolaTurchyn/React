// import {useEffect, useState} from "react";
// import {getGenres} from "../../services/API";
// import FilmItem from "../film-item/FilmItem";
//
// export default function Genters() {
//     const [genters, setGenters] = useState([]);
//
//     useEffect(() => getGenres().then(value => setGenters(value.data.genres)), [])
//     console.log(genters)
//     return (
//         <div>
//             {
//                 genters.map(genter => <FilmItem genter={genters}/>)
//             }
//         </div>
//     );
// }