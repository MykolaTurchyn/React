import UsersComponent from "./components/users/UsersComponent";
import CommentsComponent from "./components/comments/CommentsComponet";
import Counter from "./components/counter/Counter";
import API from "./components/services/API";
import PostsComponent from "./components/posts/PostsComponent";




function App() {


    return (
        <div>
            <UsersComponent/>
            <PostsComponent/>
            <CommentsComponent/>
            <API/>
            <Counter/>


        </div>
    );
}


export default App;