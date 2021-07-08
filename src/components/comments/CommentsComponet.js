import {useSelector} from "react-redux";
import {useState} from "react";

export default function CommentsComponent() {

    const comments = useSelector(({comments}) => comments)
    let [toggleComments, setToggleComments] = useState(false);

    return (
        <div>
            <button onClick={() => setToggleComments(!toggleComments)}>Comments</button>
            <ul>
                {comments.map(comment => (
                    toggleComments &&
                    <li key={comment.id}>
                        <b>Name: </b>{comment.name},<br/>
                        <b>Email: </b> {comment.email},<br/>
                        <b>Body:</b> {comment.body}
                    </li>))}
            </ul>
        </div>
    );
}