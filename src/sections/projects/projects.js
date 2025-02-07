import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import Titles from '../../components/titles/titles';
import Card from '../../components/cards/card';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import './projects.css';

const Projects = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(window.innerWidth < 1000 ? 1.5 : 2.5);

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
      image: 'https://cdn.discordapp.com/attachments/881399184291397695/1334678444784484422/fullstack_page.png?ex=679d67aa&is=679c162a&hm=f20637c485ea7056bfe661b560ef8c2238c580d08c5596eae481c1cdc47705e8',
      title: 'Fullstack Blog',
      technologies: ["devicon-react-original", "devicon-nodejs-line", "devicon-postgresql-plain"],
      description: "Desenvolvimento de um sistema de gerenciamento de tarefas usando React e Node.js."
    },
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: 'Fullstack Blog',
      technologies: ["Python", "Django", "PostgreSQL"],
      description: "Aplicação web com Django para gerenciar dados de usuários com banco de dados PostgreSQL."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: 'Fullstack Blog',
      technologies: ["Angular", "TypeScript", "Firebase"],
      description: "Sistema de autenticação e chat em tempo real com Firebase usando Angular."
    }
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
    customPaging: i => <div className="slick-dot"></div>,
    nextArrow: <GoChevronRight className="slick-nav" />,
    prevArrow: <GoChevronLeft className="slick-nav" />
  };

  const handleCardClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="cards_section">
      <div className="section-container">
        <Titles title="Projects" />
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
