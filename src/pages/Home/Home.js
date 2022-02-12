import React from 'react';
import FirstScreen from './FirstScreen/FirstScreen';
import Catalog from "../../components/Catalog/Catalog";
import AboutUs from "./AboutUs/AboutUs";
import Info from "./Info/Info";
import Opt from "./Opt/Opt";
import Messages from "./Messages/Messages";
import Express from "./Express/Express";

const Home = () => {
    return (
        <main>
            <FirstScreen/>
            <Catalog/>
            <AboutUs/>
            <Info/>
            <Opt/>
            <Messages/>
            <Express/>
        </main>
    );
};

export default Home;