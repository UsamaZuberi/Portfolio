import React from 'react';
import './PortfolioCards.scss';

function PortfolioCards({ logo, title, description, link }) {
    return (
        <div className="portfolioCards">
            <div class="portfolioCards__side portfolioCards__side--front">
                <div class="portfolioCards__picture">
                    {logo ?
                        <img src={logo} alt="Logo" />
                        :
                        <h3 className="portfolioCards__heading portfolioCards__heading--front">{title}</h3>
                    }
                </div>
            </div>

            <div class="portfolioCards__side portfolioCards__side--back">
                <div className="backSideFlex">
                    <h3 class="portfolioCards__heading portfolioCards__heading--back">{title}</h3>
                    <p className="portfolioCards__description">{description}</p>
                    <a href={link} target="_blank" rel="noreferrer" class="portfolioCards__projectLink">Visit Website&nbsp;&nbsp;&gt;</a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCards
