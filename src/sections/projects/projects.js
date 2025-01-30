import React, { Component } from "react";
import Slider from "react-slick";
import './projects.css';
import Card from '../../components/cards/card'

function Projects() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  const cards = [
    {
      id: 0,
      image: "https://via.placeholder.com/150",
      technologies: ["React", "Node.js", "Express"],
      description: "Desenvolvimento de um sistema de gerenciamento de tarefas usando React e Node.js."
    },
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      technologies: ["Python", "Django", "PostgreSQL"],
      description: "Aplicação web com Django para gerenciar dados de usuários com banco de dados PostgreSQL."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      technologies: ["Angular", "TypeScript", "Firebase"],
      description: "Sistema de autenticação e chat em tempo real com Firebase usando Angular."
    }
  ];
  return (
    <div className="section-container">
      <div className="slider-container">
        <Slider {...settings}>
          <Card/>
          <Card/><Card/>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
