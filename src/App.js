import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
