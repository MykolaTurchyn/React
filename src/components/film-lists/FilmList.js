import FilmItem from "../film-item/FilmItem";

export default function FilmList({movies}) {
    return (
        <div>
            {
                movies.map((value) =>
                    <FilmItem key={value.id} movie={value}/>)
            }
        </div>
    );
}