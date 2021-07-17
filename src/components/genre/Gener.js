export default function Gener({genreItem, genreIds}) {
    const GenresList = [];

    genreItem.map((item) => {
            if (genreIds.find(id => item.id === id)) {
                GenresList.push(item);
            }
        }
    )
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            <b>Genre: </b>
            {
                GenresList.map((value) =>
                    <div key={value.id}>
                        <span style={{marginLeft: 7}}>  {value.name}; </span>
                    </div>
                )
            }

        </div>
    );
}