export default function User({item, appFunc}) {
    return (
        <div>
            {item.id} - {item.name}
            <button onClick={ () => appFunc(item.id)

            }> CLICK ME </button>
        </div>
    );
}
