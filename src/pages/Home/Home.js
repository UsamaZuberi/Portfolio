import React from 'react';
import './Home.scss';
import BannerSection from '../../components/BannerSection/BannerSection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';

function Home() {
    return (
        <div className="home">
            <BannerSection />
            <PortfolioSection />
        </div>
    )
}

export default Home
