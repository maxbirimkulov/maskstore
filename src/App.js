import React from 'react'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
<<<<<<< HEAD
import Header from "./components/Header/Header";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Начало сайта по респираторным маскам</h1>

        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nobis.</p>
        <Footer/>
    </div>
  );
=======
import './style.css';
import Opt from "./pages/Home/Opt/Opt";

function App() {
    return (
        <div className="App">
            <Home/>
            <Footer/>
        </div>
    );
>>>>>>> 88e8db268f7e8ee7d13b70c9dcaeec9496dc9a67
}

export default App;