import './App.css'
import {BaseLayout} from "./layout/BaseLayout";
import {Home} from "./pages/Home";




export default function App() {

    return (
        <div >
            <BaseLayout>
                <Home/>
            </BaseLayout>
        </div>
    );
}
