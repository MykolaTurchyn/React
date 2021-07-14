import MoviesComponent from "./components/movies/MoviesComponent";
import {BaseLayout} from "./layout/BaseLayout";
import './App.css'
export default function App() {
    return (
        <BaseLayout>
            <MoviesComponent/>
        </BaseLayout>
    );
}