import "./styles/App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="App">
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
