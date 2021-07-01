export default function Post({item, postClick}) {
    // console.log(item)
    return (
        <div>
            <h4>{item.id}- {item.title}</h4>

            <button
                onClick={() => postClick(item.id)}
            >
                click me
            </button>
        </div>
    );
}