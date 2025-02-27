import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Titles from "../../components/titles/titles";
import Card from "../../components/cards/card";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import "./projects.css";
import { useTranslation } from "react-i18next";
import fullstackPage from "../../assets/fullstack_page.png";
import dicesPage from "../../assets/dices_page.png";
import chatPage from "../../assets/chat_page.png";

const Projects = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth < 1000 ? 1.5 : 2.5
  );
  const { t } = useTranslation();
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 1200 ? 1 : 2.5);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      id: 0,
      image: fullstackPage,
      title: "Fullstack Blog",
      technologies: [
        {
          name: "React",
          icon: "https://img.icons8.com/?size=100&id=047WZAFDnkVp&format=png&color=FFFFFF",
        },
        {
          name: "PostgreSQL",
          icon: "https://img.icons8.com/?size=100&id=Y9VdL7V5XPIc&format=png&color=FFFFFF",
        },
        {
          name: "Node.js",
          icon: "https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=FFFFFF",
        },
      ],
      description: t("blog_description"),
      fullDescription: t("full_blog_description"),
      url: "https://blog-client-olive.vercel.app/login",
      repository:
        "https://github.com/Matheus-Ribeir0/Blog-Client?tab=readme-ov-file",
    },
    {
      id: 1,
      image: dicesPage,
      title: "Dices Page",
      technologies: [
        {
          name: "JavaScript",
          icon: "https://img.icons8.com/?size=100&id=39854&format=png&color=FFFFFF",
        },
      ],
      description: t("dices_description"),
      fullDescription: t("full_dices_description"),
    },
    {
      id: 2,
      image: chatPage,
      title: "Simple Chat",
      technologies: [
        {
          name: "React",
          icon: "https://img.icons8.com/?size=100&id=047WZAFDnkVp&format=png&color=FFFFFF",
        },
        {
          name: "Firebase",
          icon: "https://img.icons8.com/?size=100&id=3Gh7IUPjoIx4&format=png&color=FFFFFF",
        },
      ],
      description: t("chat_description"),
      fullDescription: t("full_chat_description"),
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow, // Agora é dinâmico
    speed: 500,
    initialSlide: 0,
    dots: true,
    customPaging: (i) => <div className="slick-dot"></div>,
    nextArrow: <GoChevronRight className="slick-nav" />,
    prevArrow: <GoChevronLeft className="slick-nav" />,
  };

  const handleCardClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="cards_section">
      <div className="section-container">
        <Titles title={t("projects")} />
        <p className="text_projects">{t("projects_message")}</p>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="project-slide"
                onClick={() => handleCardClick(index)}
              >
                <Card
                  image={card.image}
                  title={card.title}
                  technologies={card.technologies}
                  description={card.description}
                  fullDescription={card.fullDescription}
                  url={card.url}
                  repo={card.repository}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
