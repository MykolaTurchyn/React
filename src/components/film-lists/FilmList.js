import FilmItem from "../film-item/FilmItem";
import './FilmListStyle.css'
export default function FilmList({items}) {
    return (
        <div>
                    {
                        <div className={'FilmList'}>
                            <FilmItem className={'film-list'} item={items} {...items} />
                        </div>
                    }

        </div>
    );
}