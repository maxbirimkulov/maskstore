import React from 'react'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
<<<<<<< HEAD
import Messages from './pages/Home/Messages/Messages'
import "./style.css"


function App() {
  return (
    <div className="App">

      <h1>Начало сайта по респираторным маскам</h1>

        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nobis.</p>

        <Messages/>
        <Footer/>
    </div>
  );
=======
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
>>>>>>> b5cd8ddb672b3a31388bc69fb6bce1666ece3655
}

export default App;