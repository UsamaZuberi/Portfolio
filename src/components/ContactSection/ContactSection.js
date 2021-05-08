import React, { useState } from 'react';
import axios from 'axios';
import './ContactSection.scss';
import Button from '../Button/Button';

function ContactSection() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const formChangeHandler = (event) => {
        const value = event.target.value;
        setFormData({ ...formData, [event.target.name]: value });
    }

    const submitForm = (event) => {
        event.preventDefault();

        if (formData.fullName && formData.email && formData.message) {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email)) {

                const obj = {
                    'fullName': formData.fullName,
                    'email': formData.email,
                    'message': formData.message
                }

                axios.post('https://usama-portfolio-backend.herokuapp.com/send', obj)
                    .then(response => {
                        console.log(response.data);
                    });

            } else {
                alert("You have entered an invalid email address!");
            }

        } else {
            alert("You have missed a required field. Please fill Aal required fields!");
        }
    }

    return (
        <section id="contactSection" className="contactSection">
            <h2 className="section-heading">Contact</h2>
            <p className="section-intro">I like to create things with fun, open-minded people. Feel free to say hello!</p>

            <div className="contact">
                <div className="contact__detailBox">
                    <div className="contact__detailSeperator">
                        <div className="contact__detail">
                            <a href="tel:+92-306-2435762" className="roundIcon"><i className="fas fa-phone"></i></a>
                            <div>
                                <div className="contact__name">Phone</div>
                                <div className="contact__info"><a href="tel:+92-306-2435762">+92-306-2435762</a></div>
                            </div>
                        </div>

                        <div className="contact__detail">
                            <a href="mailto:usama.zuberi1010@gmail.com" className="roundIcon"><i className="fas fa-envelope"></i></a>
                            <div>
                                <div className="contact__name">Email</div>
                                <div className="contact__info"><a href="mailto:usama.zuberi1010@gmail.com">usama.zuberi1010@gmail.com</a></div>
                            </div>
                        </div>

                        <div className="contact__detail">
                            <a href="https://goo.gl/maps/LJ7cLaTn9qMTeJpA9" className="roundIcon"><i className="fas fa-map-marker-alt"></i></a>
                            <div>
                                <div className="contact__name">Address</div>
                                <div className="contact__info"><a href="https://goo.gl/maps/LJ7cLaTn9qMTeJpA9" rel="noreferrer" target="_blank">Karachi, Pakistan</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socialBox">
                        <h4 className="contact__heading">Connect with me</h4>
                        <div className="contact__social">
                            <a href="https://www.facebook.com/muhammadusama.zuberi" target="_blank" rel="noreferrer" className="roundIcon"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/muhammadusamazuberi/" target="_blank" rel="noreferrer" className="roundIcon"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.twitter.com/usamazuberi" target="_blank" rel="noreferrer" className="roundIcon"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.github.com/usamazuberi" target="_blank" rel="noreferrer" className="roundIcon"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="contact__form">
                    <form id="contactForm" className="form">
                        <h4 className="form__heading">Send Message</h4>
                        <div className="form__group">
                            <input type="text" id="fullName" className="form__input" placeholder="Full Name" required name="fullName" value={formData.fullName} onChange={(e) => formChangeHandler(e)}></input>
                        </div>
                        <div className="form__group">
                            <input type="email" id="email" className="form__input" placeholder="Email" required name="email" value={formData.email} onChange={(e) => formChangeHandler(e)}></input>
                        </div>
                        <div className="form__group">
                            <textarea id="message" cols="30" rows="4" className="form__message" placeholder="Type your message here..." required name="message" value={formData.message} onChange={(e) => formChangeHandler(e)}></textarea>
                        </div>
                        <div className="form__btn">
                            <Button type="submit" text="Send" onClick={(e) => submitForm(e)} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
