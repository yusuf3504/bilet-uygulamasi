import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faPlane, faCar, faShip, faHotel } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ onSelectCategory }) {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const handleCloseClick = () => {
    setShowLogin(false);
  };

  return (
    <div className='header'>
      <div className='logo'>
        <img
          src='https://www.turizmajansi.com/images/haber/dunyanin-tum-havayollari-_6f05.jpg'
          alt='logo'
        />
      </div>
      <div className="nav-buttons">
        <ul className="menu-left">
          <div className="selected">
            <Link to="/" className='icon' onClick={() => onSelectCategory('bus')}>
              <FontAwesomeIcon icon={faBus} /> Otobüs
            </Link>
          </div>
          <div className="fly">
            <Link to="/ucak" className='icon' onClick={() => onSelectCategory('flight')}>
              <FontAwesomeIcon icon={faPlane} /> Uçak
            </Link>
          </div>
          <div className="rentcar">
            <Link to="/araba" className='icon' onClick={() => onSelectCategory('car')}>
              <FontAwesomeIcon icon={faCar} /> Araba
            </Link>
          </div>
          <div className="sea">
            <Link to="/tekne" className='icon' onClick={() => onSelectCategory('boat')}>
              <FontAwesomeIcon icon={faShip} /> Tekne
            </Link>
          </div>
          <div className="hotel">
            <Link to="/otel" className='icon' onClick={() => onSelectCategory('hotel')}>
              <FontAwesomeIcon icon={faHotel} /> Otel
            </Link>
          </div>
        </ul>
        <button className='login-button' onClick={handleLoginClick}>Log In</button>
      </div>
      <div className='login-menu'>
        {showLogin && (
          <div className='login-overlay'>
            <div className='login-form'>
              <span className='close-button' onClick={handleCloseClick}>&times;</span>
              <button className='social-login google'>
                <FontAwesomeIcon icon={faGoogle} /> Google ile Giriş Yap
              </button>
              <button className='social-login phone'>
                <FontAwesomeIcon icon={faPhone} /> Telefon Numarası ile Giriş Yap
              </button>
              <button className='social-login apple'>
                <FontAwesomeIcon icon={faApple} /> Apple ile Giriş Yap
              </button>
              <div className='email-login'>
                <input className='email' type="email" placeholder='E-posta'></input>
                <input className='sifre' type="password" placeholder='Şifre' ></input>
              </div>
              <a href='#' className='forgot-password'>Şifremi Unuttum</a>
              <button className='submit-button'>Giriş Yap</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

