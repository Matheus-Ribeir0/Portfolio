import React from 'react'
import './techStack.css'
import Titles from "../../components/titles/titles";

function techStack() {
  return (
    <div className='section-container'>
      <Titles title="Tech-stack"/>
      <div className='tech-stack-container'>
      
        <div className='tech-stack-column'>
          <h2>Languages</h2>
          <div className='tech-stack-row'>
            <div className='tech-stack-item'>
              <img src='https://img.icons8.com/color/96/000000/html-5--v1.png' alt='html'/>
              <p>HTML</p>
            </div>
            <div className='tech-stack-item'>
              <img src='https://img.icons8.com/color/96/000000/css3.png' alt='css'/>
              <p>CSS</p>
            </div>
            <div className='tech-stack-item'>
              <img src='https://img.icons8.com/color/96/000000/javascript--v1.png' alt='javascript'/>
              <p>JavaScript</p>
              </div>
            </div>
        </div>
        <div className='tech-stack-column'>
          <h2>Backend</h2>
          <div className='tech-stack-row'>
          <div className='tech-stack-item'>
            <img src='https://img.icons8.com/color/96/000000/nodejs.png' alt='node'/>
            <p>Node.js</p>
          </div>
          <div className='tech-stack-item'>
            <img src='https://img.icons8.com/color/96/000000/mongodb.png' alt='mongodb'/>
            <p>MongoDB</p>
          </div>
        </div>
        </div>
        <div className='tech-stack-column'>
          <h2>Tools</h2>
          <div className='tech-stack-row'>
          <div className='tech-stack-item'>
            <img src='https://img.icons8.com/color/96/000000/git.png' alt='git'/>
            <p>Git</p>
          </div>
          <div className='tech-stack-item'>
            <img src='https://img.icons8.com/color/96/000000/github--v1.png' alt='github'/>
            <p>GitHub</p>
          </div>
        </div>
        </div>
        <div className='tech-stack-column'>
          <h2>Frameworks</h2>
          <div className='tech-stack-row'>
            <div className='tech-stack-item'>
              <img src='https://img.icons8.com/color/96/000000/react-native.png' alt='react'/>
              <p>React</p>
              </div>
            </div>
            </div>
        
      </div>
    </div>
  )
}

export default techStack