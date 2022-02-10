import React from 'react'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./style.css";
import Opt from "./pages/Home/Opt/Opt";

function App() {
    return (
        <div className="App">
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;