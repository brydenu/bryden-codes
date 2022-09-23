import "./styles/App.scss";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Footer } from "./Components";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="App">
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
