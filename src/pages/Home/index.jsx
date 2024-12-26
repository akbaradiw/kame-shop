import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import Overview from '../../components/Overview';
import BestProducts from '../../components/BestProducts';
import Subscribes from '../../components/Subscribes';
import CallToAction from '../../components/CallToAction';
import Footer from  '../../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Overview />
            <BestProducts />
            <Subscribes />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Home