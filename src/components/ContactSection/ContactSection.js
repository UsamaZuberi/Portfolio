import React from 'react';
import './ContactSection.scss';
import Button from '../Button/Button';

function ContactSection() {
    return (
        <div className="contactSection">
            <h2 className="section-heading">Contact</h2>
            <p className="section-intro">I like to create things with fun, open-minded people. Feel free to say hello!</p>

            <div className="contact">
                <div className="contact__detailBox">
                    <div className="contact__detail">
                        <a href="tel:+92-306-2435762" className="roundIcon"><i class="fas fa-phone"></i></a>
                        <div>
                            <div className="contact__name">Phone</div>
                            <div className="contact__info"><a href="tel:+92-306-2435762">+92-306-2435762</a></div>
                        </div>
                    </div>

                    <div className="contact__detail">
                        <a href="mailto:usama.zuberi1010@gmail.com" className="roundIcon"><i class="fas fa-envelope"></i></a>
                        <div>
                            <div className="contact__name">Email</div>
                            <div className="contact__info"><a href="mailto:usama.zuberi1010@gmail.com">usama.zuberi1010@gmail.com</a></div>
                        </div>
                    </div>

                    <div className="contact__detail">
                        <a href="https://goo.gl/maps/LJ7cLaTn9qMTeJpA9" className="roundIcon"><i class="fas fa-map-marker-alt"></i></a>
                        <div>
                            <div className="contact__name">Address</div>
                            <div className="contact__info"><a href="https://goo.gl/maps/LJ7cLaTn9qMTeJpA9" target="_blank">Karachi, Pakistan</a></div>
                        </div>
                    </div>

                    <div >
                        <h4 className="contact__heading">Connect with me</h4>
                        <div className="contact__social">
                            <a href="https://www.facebook.com/muhammadusama.zuberi" className="roundIcon"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/muhammadusamazuberi/" className="roundIcon"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.twitter.com/usamazuberi" className="roundIcon"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className="contact__form">
                    <form action="" className="form">
                        <h4 className="form__heading">Send Message</h4>
                        <div className="form__group">
                            {/* <label htmlFor="fullName" className="form__label">Full Name</label> */}
                            <input type="text" id="fullName" className="form__input" placeholder="Full Name"></input>
                        </div>
                        <div className="form__group">
                            {/* <label htmlFor="email" className="form__label">Email</label> */}
                            <input type="email" id="email" className="form__input" placeholder="Email"></input>
                        </div>
                        <div className="form__group">
                            {/* <label htmlFor="message" className="form__label">Email</label> */}
                            <textarea name="formMessage" id="" cols="30" rows="4" id="message" className="form__message" placeholder="Type your message here..."></textarea>
                        </div>
                        <div className="form__btn">
                            <Button type="submit" text="Send" onClick={() => { }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection