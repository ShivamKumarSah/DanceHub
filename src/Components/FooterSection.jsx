import React from 'react';
import './FooterSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const FooterSection = () => {
    return (
        <footer className="footer-area">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="widget company-widget">
                                <h3 className="widget-title">Opening hour:</h3>
                                <p>Monday to Saturday <br /> 10:00 AM - 09:00 PM</p>
                                <form className="subscribe-form" method="post" noValidate>
                                    <input type="text" name="EMAIL" className="form-control" placeholder="Email" />
                                    <div>
                                        <a href="#!" className="bg-purple-600 rounded my-8 py-2 px-3 hover:bg-opacity-90 duration-300 text-white text-xl inline-flex ">Subscribe Now</a>
                                    </div>
                                    <p className="error-message" style={{ display: 'none' }}></p>
                                    <p className="success-message" style={{ display: 'none' }}></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h3 className="widget-title">Quick Links</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Classes</a></li>
                                    <li><a href="#">Package</a></li>
                                    <li><a href="#">Schedule</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget">
                                <h3 className="widget-title">Contact Now</h3>
                                <ul className="list-unstyled">
                                    <li className='flex  align-middle'><div className="p-2 bg-purple-500 text-white rounded-lg w-max h-8 w-8 flex justify-center align-middle mr-2"><FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div><a href="#">835 Middle Country Rd, USA</a></li>
                                    <li className='flex  align-middle'><div className="p-2 bg-purple-500 text-white rounded-lg w-max h-8 w-8 flex justify-center align-middle mr-2"><FontAwesomeIcon icon={faPhone} />
                                    </div><a href="#">+(163)-1202-0088<br />+(163)-1202-0099</a></li>
                                    <li className='flex  align-middle'><div className="p-2 bg-purple-500 text-white rounded-lg w-max h-8 w-8 flex justify-center align-middle mr-2"><FontAwesomeIcon icon={faEnvelope} />
                                    </div><a href="#">help24/7@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget social-widget">
                                <h3 className="widget-title">Team Solutions</h3>
                                <div className="social-icons">
                                    <a href="#" className="fab fa-facebook"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-linkedin"></a>
                                    <a href="#" className="fab fa-pinterest"></a>
                                </div>
                                <img className="my-10 text-start" src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/logo.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bg">
                    <div className="footer-bg-one"></div>
                    <div className="footer-bg-two"></div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0">© DanceHub Inc. 2024 All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default FooterSection;
