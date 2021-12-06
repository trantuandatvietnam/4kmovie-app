import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">4K Movie</Link>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Term of Service</Link>
            <Link to="/">About Us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Preium </Link>
            <Link to="/">Policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You mush watch</Link>
            <Link to="/">Release</Link>
            <Link to="/">Term of Service</Link>
            <Link to="/">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
