import React from 'react';

import './Home.scss';

import BannerSection from '../../components/BannerSection/BannerSection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import ContactSection from '../../components/ContactSection/ContactSection';

function Home() {
    return (
        <div className="home">
            <BannerSection />
            <PortfolioSection />
            <ContactSection />
            <div className="footer">
                Copyright&copy; 2021 Muhammad Usama Zuberi. All rights reserved.
            </div>
        </div>
    )
}

export default Home
