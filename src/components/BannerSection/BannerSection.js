import React from 'react';
import './BannerSection.scss';
import BannerImage from '../../assets/images/bannerImg.png';
import CV from '../../assets/cv/Muhammad_Usama_Zuberi_CV.pdf';
import Button from '../Button/Button';

function BannerSection() {

    return (
        <section className="bannerSection">
            <div className="bannerSection__left">
                {/* <div className="socialLinks">
                    <span className="socialLinks__icon"><i class="fab fa-facebook-f"></i></span>
                    <span className="socialLinks__icon"><i class="fab fa-linkedin-in"></i></span>
                    <span className="socialLinks__icon"><i class="fab fa-twitter"></i></span>
                    <span className="socialLinks__icon"><i class="fab fa-whatsapp"></i></span>
                </div> */}
                <div className="introText">
                    <span className="introText__salutation">Hello! I'm</span>
                    <span className="introText__name">Muhammad Usama Zuberi</span>
                    <span className="introText__title">Front-end Web Developer</span>
                    <span className="introText__bio">I design beautiful, engaging user experiences and intuitive user interfaces for the web. I pride myself on reliable communication and being an easy to work with , friendly guy.</span>

                    <div className="bannerButtons">
                        <a href={CV} download="Muhammad_Usama_Zuberi_CV.pdf">
                            <Button type="button" text="Download CV" onClick={() => { }} />
                        </a>

                        <a href="mailto:usama.zuberi1010@gmail.com">
                            <Button type="button" text="Email Me" onClick={() => { }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bannerSection__right">
                <img src={BannerImage} alt="Muhammad Usama Zuberi" className="bannerImg" />
            </div>
            <a href="./" className="mouseScroll"><i class="fas fa-angle-double-down"></i></a>
        </section>
    )
}

export default BannerSection
