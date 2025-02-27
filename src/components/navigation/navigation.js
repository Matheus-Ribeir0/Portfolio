import React from 'react';
import './navigation.css';
import { useTranslation } from 'react-i18next';

function Navigation() {
  const { t } = useTranslation();
  return (
    <div className="navigation_container">
      <div className="nav-links">
        <a href="#about-me">{t('about_me')}</a>
        <a href="#projects">{t('projects')}</a>
        <a href="#tech-stack">Tech Stack</a>
        <a className='lnk-cont' href="#contact-me">{t('contact-me')}</a>
      </div>
    </div>
  );
}

export default Navigation;
