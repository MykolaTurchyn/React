import MoviesComponent from "./components/movies/MoviesComponent";
import {BaseLayout} from "./layout/BaseLayout";
import './App.css'
import Gener from "./components/genre/Gener";
export default function App() {
    return (
        <BaseLayout>
            <MoviesComponent/>
            <Gener/>
        </BaseLayout>
    );
}