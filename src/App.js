import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

export default function App() {

    return (
        <Router>
            <div>
                <Link to={'/users'}>Users Page</Link>
                <br/>
                <Link to={'/posts'}>Posts Page</Link>
                <br/>
                <Link to={'/comments'}>Comments Page</Link>
                <br/>


                <Switch>

                    <Route path={'/posts'} render={() =>
                        <Posts/>}>
                    </Route>

                    <Route path={'/users'} render={() =>
                        <Users />}>
                    </Route>

                    <Route path={'/comments'} render={() =>
                        <Comments/>}>
                    </Route>
                </Switch>


            </div>
        </Router>
    );
}