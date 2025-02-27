import React from 'react';
import { useTranslation } from 'react-i18next';
import "./aboutMe.css";
import Titles from "../../components/titles/titles";
import profilePicture from "../../assets/foto_perfil_cropada-removebg-preview.jpg"; // Importe a imagem da pasta assets

const AboutMe = (props) => {
    const { t } = useTranslation();

    return (
        <div>
            <Titles title={t('about_me')} />
            <div className="about-me">
                <div className="about-picture">
                    <img src={profilePicture} alt="Matheus Ribeiro" className="picture" />
                </div>
                <div className="about-text">
                    <p>{t('hi_there')}<br /><br /></p>
                    <p>{t('journey')}<br /><br /></p>
                    <p>{t('specialize')}<br /><br /></p>
                    <p>{t('exploring')}<br /><br /></p>
                    <p>{t('when_not_coding')}<br /><br /></p>
                    <p><span className="blue-color">{t('lets_create')}</span></p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;