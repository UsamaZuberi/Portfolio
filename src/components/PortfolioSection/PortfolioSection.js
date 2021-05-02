import React from 'react';
import './PortfolioSection.scss';
import PortfolioCards from '../Cards/PortfolioCards/PortfolioCards';
import SevenStarTraining from '../../assets/images/logo.png'

function PortfolioSection() {
    return (
        <section id="portfolioSection" className="portfolioSection">
            <h2 className="section-heading">My Recent Work</h2>
            <p className="section-intro">Here are a few projects I've worked on recently. Want to see more? <a href="mailto:usama.zuberi1010@gmail.com" className="emailLink" title="usama.zuberi1010@gmail.com">Email me</a></p>

            <div className="cardsGallery">
                <PortfolioCards logo={SevenStarTraining} title="7 Star Training" description="Results-oriented, responsive and flexible full service civil engineering firm." />
                <PortfolioCards logo={SevenStarTraining} title="7 Star Training" description="Results-oriented, responsive and flexible full service civil engineering firm." />
                <PortfolioCards logo={SevenStarTraining} title="7 Star Training" description="Results-oriented, responsive and flexible full service civil engineering firm." />
                <PortfolioCards logo={SevenStarTraining} title="7 Star Training" description="Results-oriented, responsive and flexible full service civil engineering firm." />
                <PortfolioCards logo={SevenStarTraining} title="7 Star Training" description="Results-oriented, responsive and flexible full service civil engineering firm." />
                <PortfolioCards logo={SevenStarTraining} title="7 Star Training" description="Results-oriented, responsive and flexible full service civil engineering firm." />
                <PortfolioCards logo={SevenStarTraining} title="7 Star Training" description="Results-oriented, responsive and flexible full service civil engineering firm." />
                <PortfolioCards logo={SevenStarTraining} title="7 Star Training" description="Results-oriented, responsive and flexible full service civil engineering firm." />
                <PortfolioCards logo={SevenStarTraining} title="7 Star Training" description="Results-oriented, responsive and flexible full service civil engineering firm." />
            </div>
        </section>
    )
}

export default PortfolioSection
