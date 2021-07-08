import {useDispatch} from "react-redux";
import {useEffect} from "react";

export default function API() {
    const dispatch = useDispatch()


    const Users = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json();

        dispatch({
            type: 'Add_Users',
            payload: json
        })
    }

    useEffect(() => {
        Users()
    }, [])

    const Posts = async () => {
        const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        const jsonPosts = await responsePosts.json();

        dispatch({
            type: 'Add_Posts',
            payload: jsonPosts
        })

    }

    useEffect(() => {
        Posts()
    }, [])

    const Comment = async () => {
        const responseComments = await fetch('https://jsonplaceholder.typicode.com/comments')
        const jsonComments = await responseComments.json()
        dispatch({

            type: 'Add_Comments',
            payload: jsonComments
        })
    }
    useEffect(() => {
        Comment()
    }, [])

    return (
        <div>

        </div>
    );
}
