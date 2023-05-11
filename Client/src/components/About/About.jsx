import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">John Harold Lanza Martínez</h1>
      <h2 className="AboutSubTitle">UI / UX Designer & Developer</h2>
      <article className="aboutInfo">
        <div className="aboutImage">
          <img
            className="imgJohn"
            src="https://i.postimg.cc/7Z5R5gKk/john.jpg"
            alt=""
          />
        </div>
        <p className="aboutMe">
          I am a Full Stack student of Henry, I am from Peru. I enjoy taking
          complex problems and turning them into beautiful, simple interface
          designs. I also love the logic and structure of coding and always
          strive to write elegant and efficient code, be it HTML, CSS,
          JavaScript or jQuery. When I'm not programming or pushing pixels,
          you'll find me at home watching movies or listening to music.
        </p>
      </article>
      <section className="aboutContact">
        <div className="aboutContactMe">
          <h2> Contact Me</h2>
          <div className="contactMe">
            <p>
              <i class="fa-solid fa-paper-plane"></i> johalama2023@gmail.com{" "}
            </p>
            <p>
            <i class="fa-brands fa-whatsapp"></i> +51919063494{" "}
            </p>
          </div>
        </div>
        <div className="aboutSocial">
          <ul className="socialContent">
            <li className="socialItem">
              <a href="https://www.facebook.com/john.lanza.9465" target="blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="socialItem">
              <a href="https://www.instagram.com/theyousniper/" target="blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="socialItem">
              <a href="https://github.com/johalama2023" target="blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Link to={'/home'}>
        <button className="aboutButton">Go Home</button>
      </Link>
    </div>
  );
};

export default About;
