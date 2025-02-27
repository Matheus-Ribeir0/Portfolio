import React from "react";
import "./techStack.css";
import Titles from "../../components/titles/titles";

function techStack() {
  return (
    <div className="section-container">
      <Titles title="Tech-stack" />
      <div className="tech-stack-container">
        <div className="tech-stack-column">
          <h2>Languages</h2>
          <div className="tech-stack-row">
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/color/96/000000/html-5--v1.png"
                alt="html"
              />
              <p>HTML</p>
            </div>
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/color/96/000000/css3.png"
                alt="css"
              />
              <p>CSS</p>
            </div>
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/color/96/000000/javascript--v1.png"
                alt="javascript"
              />
              <p>JavaScript</p>
            </div>
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
                alt="javascript"
              />
              <p>TypeScript</p>
            </div>
          </div>
        </div>
        <div className="tech-stack-column">
          <h2>Backend</h2>
          <div className="tech-stack-row">
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/color/96/000000/nodejs.png"
                alt="node"
              />
              <p>Node.js</p>
            </div>
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/color/96/000000/mongodb.png"
                alt="mongodb"
              />
              <p>MongoDB</p>
            </div>
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000"
                alt="mongodb"
              />
              <p>MySQL</p>
            </div>
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"
                alt="github"
              />
              <p>Firebase</p>
            </div>
          </div>
        </div>
        <div className="tech-stack-column">
          <h2>Tools</h2>
          <div className="tech-stack-row">
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/color/96/000000/git.png"
                alt="git"
              />
              <p>Git</p>
            </div>
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/color/96/000000/github--v1.png"
                alt="github"
              />
              <p>GitHub</p>
            </div>
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
                alt="github"
              />
              <p>Figma</p>
            </div>
          </div>
        </div>
        <div className="tech-stack-column">
          <h2>Frameworks</h2>
          <div className="tech-stack-row">
            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/color/96/000000/react-native.png"
                alt="react"
              />
              <p>React</p>
            </div>

            <div className="tech-stack-item">
              <img
                src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                alt="react"
              />
              <p>React-Native</p>
            </div>
          </div>

          <div className="tech-stack-item">
            <img
              src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
              alt="react"
            />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default techStack;
