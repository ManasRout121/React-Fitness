import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maxime in dolores, doloremque adipisci quam vitae rerum ab libero laborum.</p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer nooperer'>
                        <FaLinkedin /></a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer nooperer'>
                        <FaFacebook /></a> 
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer nooperer'>
                        <AiOutlineTwitter /></a> 
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer nooperer'>
                        <AiOutlineInstagram /></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blogs</Link>
                <Link to="/p">Case Studies</Link>
                <Link to="/g">Events</Link>
                <Link to="/t">Communities</Link>
                <Link to="/c">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 MANAS TUTORIALS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer