import "./aboutMe.css";
import Titles from "../../components/titles/titles";
import profilePicture from "../../assets/foto_perfil_cropada-removebg-preview.jpg"; // Importe a imagem da pasta assets

//../../assets/foto_perfil_cropada.jpg
const AboutMe = (props) => {
    return (
        <div >
            <Titles title="About-me"/>
            <div className="about-me">
                <div className="about-picture">
                    <img src={profilePicture} alt="Matheus Ribeiro" className="picture"/>
                </div>
                <div className="about-text">
                    <p>Hi there! 👋 I'm Matheus Ribeiro, a passionate and driven developer with a strong background in building dynamic and responsive web
                        applications.
                        <br /> <br />
                    </p>
                    <p>
                        My journey into the world of programming began with a curiosity for how things work behind the scenes, and ever since, I've been honing my skills to craft efficient and innovative solutions.<br /> <br />
                    </p><p>
                        I specialize in front-end development, with a focus on creating clean, user-friendly interfaces using modern technologies like React, JavaScript, and CSS.<br /> <br />
                    </p><p>
                        I’m constantly exploring new tools and frameworks to stay up-to-date with the latest trends in web development.<br /> <br />
                    </p><p>
                        When I’m not coding, I enjoy solving complex problems, learning about the latest advancements in tech, and collaborating with others to bring creative ideas to life. I'm always excited to tackle new challenges and grow both personally and professionally.<br /> <br />
                    </p><p><span className="blue-color">
                        Let's create something amazing together!</span>
                    </p>

                </div>
            </div>
        </div>
    )

}

export default AboutMe;