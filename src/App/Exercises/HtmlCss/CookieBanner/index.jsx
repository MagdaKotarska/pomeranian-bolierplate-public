import './styles.css';
import React, { useState, useEffect } from 'react';

export function CookieBanner() {
  const [cookieBannerHidden, setCookieBannerHidden] = useState(false);

  function setCookiesInfo() {
    localStorage.setItem('cookieState', 1);
    setCookieBannerHidden(true);
  }

  function checkCookieData() {
    return localStorage.getItem('cookieState');
  }

  useEffect(() => {
    if (checkCookieData()) {
      setCookieBannerHidden(true);
    }
  }, []);

  return (
    <div
      className={
        cookieBannerHidden
          ? 'cookie-banner cookie-hidden'
          : 'cookie-banner cookie-visiable'
      }
    >
      <div className="cookie-banner-content">
        <img
          className="cookie-banner-image"
          src="https://raw.githubusercontent.com/pomeranianstartit-pl/pomeranian-bolierplate-public/master/src/App/Images/cookie.svg"
          alt="cookie icon"
        />
        <div className="cookie-banner-text">
          <h4>Pozwól na pliki cookies</h4>
          <p>
            Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
            działanie strony i pomagają nam świadczyć usługi na najwyższym
            poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
            tych plików i przejść do strony lub dostosować użycie do swoich
            preferencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
            zgody”, aby następnie wybrać te które odpowiadają Twoim
            indywidualnym preferencjom.
          </p>
        </div>
      </div>
      <div className="cookie-banner-actions">
        <button className="action-button button-red">W porządku </button>
        <button className="action-button button-white"> Dopasuj zgody </button>
      </div>
    </div>
  );
}
