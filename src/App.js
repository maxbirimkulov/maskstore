import React from 'react'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import {Routes, Route} from 'react-router-dom'
import Delivery from "./pages/Delivery/Delivery";
import "./style.css"
import Opts from "./pages/Opts/Opts";
import Contact from "./pages/Contact/Contact";
import Def from "./pages/Def/Def";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/delivery' element={<Delivery/>}/>
            <Route path='/opt' element={<Opts/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/def' element={<Def/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;