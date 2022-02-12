import React from 'react'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Catalog from './components/Catalog/Catalog'
import Messages from './pages/Home/Messages/Messages'
import "./style.css"


function App() {
  return (
    <div className="App">
      <h1>Начало сайта по респираторным маскам</h1>

        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nobis.</p>
      <Catalog/>
        <Messages/>
        <Footer/>
    </div>
  );


}

export default App;