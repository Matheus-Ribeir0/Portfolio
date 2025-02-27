import React, { useState } from "react";
import "./card.css";
import { Dialog, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

function Card(props) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Se for mobile, não mostra o modal

  return (
    <div className="card_container" onClick={() => !isMobile && setOpen(true)}>
      {!isMobile && (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          className="card-modal"
          maxWidth="lg"
          disableEscapeKeyDown={false}
        >
          <div className="MuiPaper-root">
            {/* Lado esquerdo - Imagem (40% do modal) */}
            <div
              className="modal-image"
              style={{
                backgroundImage: `url(${props.image})`,
                width: "40%",
                borderRadius: "12px 0 0 12px",
              }}
            ></div>

            {/* Lado direito - Conteúdo */}
            <div className="modal-content">
              <button
                className="close-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
              >
                ✖
              </button>
              <h2>{props.title}</h2>
              <p className="modal-description">{props.fullDescription}</p>

              {/* Tecnologias */}
              <div className="technologies">
                {props.technologies.map((tech) => (
                  <div key={tech.icon} className="tech-item">
                    <img src={tech.icon} alt={tech.name} />
                    <p className="tech-name">{tech.name}</p>
                  </div>
                ))}
              </div>

              {/* Botões */}
              <div className="button-container">
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                  <button className="action-button">Visitar Página</button>
                </a>
                <a
                  href={props.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-button"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=7867&format=png&color=FFFFFF"
                    alt="Repo Icon"
                  />
                  {t("link_to_repository")}
                </a>
              </div>
            </div>
          </div>
        </Dialog>
      )}

      {/* Card normal */}
      <img className="image" src={props.image} alt="imagem" />
      <div className="above_image">
        <h3 className="card_title">{props.title}</h3>
        <p className="card_description">{props.description}</p>
        <div className="technologies">
          {props.technologies.map((tech) => (
            <div key={tech.icon} className="tech-item">
              <img
                src={tech.icon}
                className="image-tech"
                alt={tech.name}
              />
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
