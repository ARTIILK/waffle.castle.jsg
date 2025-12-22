import React from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import MonthlySpecials from '../components/MonthlySpecials';
import Offers from '../components/Offers';
import About from '../components/About';
import Reviews from '../components/Reviews';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <MonthlySpecials />
            <MenuSection />
            <Offers />
            <Reviews />
            <About />
        </>
    );
};

export default Home;
