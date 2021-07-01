import Post from "../post/Post";

export default function Posts ({items,postsClick}) {

    return(
        <div>
            {
                items.map((value) => <Post key={value.id} item={value} postClick={postsClick}/>)
            }
        </div>
    );
}