import React from "react";
import { useTranslation } from "react-i18next";
import "./heather.css";
import logo from "../../assets/logo.png";

const Hether = (props) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    console.log(i18n.language);
    const newLanguage = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      <div id="language">
        {t("language_pt")}
        <input type="checkbox" id="switch" onClick={handleLanguageChange} />
        <label htmlFor="switch">{t("toggle")}</label>
        {t("language")}
      </div>
    </header>
  );
};

export default Hether;
