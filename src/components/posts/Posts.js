import './PostsStyle.css'

export default function Posts({item}) {

    return (
        <div >
            <p className={'show'}>
                {item.userId} - {item.id} - {item.title}
            </p>

        </div>
    )

}