import React, { useState } from "react";

import "../styles/home.scss";
import "../styles/navbar.scss";
import "../styles/gallery.scss";

import Gallery from "../components/Gallery";
import Skillsbar from "../components/SkillsBar";
import SkillsbarDesign from "../components/SkillsBarDesign";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

import { TiArrowSync } from "react-icons/ti";

import IMGPORTFILE from "../assets/FotoCVMobile.png";
import PdfCV from "../assets/Cv2022AgustínBillar.pdf";

const Home = () => {
  const [toogle, setToogle] = useState(true);
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>

      <section className="Intro" id="Intro">
        <div className="TituloIntro">
          <p>Hola, Soy Agustín billar</p>
          <h1>Front-end</h1>
          <h1>developer</h1>
          <p>Desarrollo web y contenido digital</p>
        </div>
      </section>

      <section className="SobreMi" id="SobreMi">
        <div className="imageporfile">
          <img src={IMGPORTFILE} alt="Image" className="image"></img>
        </div>
        <div className="TextContainer">
          <h1> Sobre Mi </h1>
          <p>
            Hola! Mi nombre es Agustín y soy Front-end Developer. <br></br>
            Al principio de mi carrera me desarrolle como diseñador de
            contenidos digitales, pasando los años encontre una nueva profesión
            que es el desarrollo web. Actualmente me encanta generar webs con un
            alto impacto visual aprovechando la experiencia de ambas
            profesiones.
          </p>
          <buton className= "Cv_btn"> 
              <a href = {PdfCV} target = "_blank" > Descargá mi CV</a>
          </buton>
        </div>
      </section>

    
      <section className="Proyectos" id="Proyectos">
        <h1 className="titleProyects">Proyectos Web</h1>

        <Slider />
      </section>

      <section className="Habilidades" id="Habilidades">
        <div className="toogle">
          <div>
            {toogle ? (
              <h1 className="title-text">
                Habilidades web
              </h1>
            ) : (
              <h1 className="title-text">
                Habilidades diseño
              </h1>
            )}
          </div>
          <div>
            <button
              className="ButtonSkillbar"
              onClick={() => setToogle(!toogle)}
            >
              {" "}
              <TiArrowSync />{" "}
            </button>
          </div>
        </div>

        <div className="Skills">
          {toogle ? <Skillsbar /> : <SkillsbarDesign />}
        </div>
      </section>

      <section className="Contacto" id="Contacto">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
