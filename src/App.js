import React, {Component} from 'react';
import GetUsers from "./components/get-users/GetUsers";
import GetPosts from "./components/get-posts/GetPosts";

class App extends Component {
    render() {
        return (
            <div>
                {
                    <GetUsers/>
                }
                {
                    <GetPosts/>
                }

            </div>
        );
    }

}

export default App;