import React from 'react';
import Footer from "../../components/Footer/Footer";
import Catalog from '../../components/Catalog/Catalog'
import FirstScreen from './FirstScreen/FirstScreen';
import Opt from './Opt/Opt';

const Home = () => {
    return (
        <main>
            <FirstScreen/>
            <Opt/>
        </main>
    );
};

export default Home;