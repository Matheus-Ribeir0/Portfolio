import React from "react";
import { useTranslation } from "react-i18next";
import "./mainPage.css";

const MainPage = (props) => {
  const { t } = useTranslation();

  return (
    <div className="gradient-div">
      <div className="main_page">
        <div className="text-section">
          <h2>
            {t("hello_world")} <span className="wave">👋</span>
          </h2>
          <h2>
            {t("i_am")} <span id="name">Matheus Ribeiro</span>
          </h2>
          <div className="text-type">
            <h1>{t("fullstack_developer")}</h1>
          </div>
          <a href="#contact-me"><button className="button-glow">
            {t("lets_connect")}
            <span className="arrow"> →</span>
          </button></a>
          
        </div>
        <div className="image-section">
          {/* Adicione a imagem ou conteúdo desejado aqui */}
        </div>
      </div>
      <span className="gradient"></span>
    </div>
  );
};

export default MainPage;
