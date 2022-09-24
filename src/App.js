import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "components/index.js";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="App">
                <Routes />
            </div>
        </BrowserRouter>
    );
}

export default App;
