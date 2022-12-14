import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import {
  FaWordpressSimple,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiWebpack } from "react-icons/si";

import IMG1 from "../assets/GalleryIMG/Template-webs-RFAs.webp";
import IMG2 from "../assets/GalleryIMG/Template-web-Limon.webp";
import IMG3 from "../assets/GalleryIMG/Template-webs-ASseguros.webp";
import IMG4 from "../assets/GalleryIMG/Template-webs-Learninc.webp";
import IMG5 from "../assets/GalleryIMG/Template-webs-Portfolio.webp";

const Slider = () => {
  return (

    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          1269: {
            slidesPerView: 3,
          },
          746: {
            slidesPerView: 2,
          },

          0: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <div className="CardContent">
            <div className="CardImage">
              <img src={IMG5} alt="ProyectoWeb" className="gallery-img" />
            </div>

            <div className="CardText">
              <h1>
                Este<span> Portfolio</span>
              </h1>
              <p>Web desarrollada en React copilada con Webpack</p>

              <div className="iconpluslink">
                <div className="icon">
                  <FaReact />
                </div>
                <div className="icon">
                  <FaSass />
                </div>
                <div className="icon">
                  <FaJs />
                </div>
                <div className="icon">
                  <SiWebpack />
                </div>
              </div>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="CardContent">
            <div className="CardImage">
              <img src={IMG2} alt="ProyectoWeb" className="gallery-img" />
            </div>
            <div className="CardText">
              <h1>
                Limón<span> Fotografía</span>
              </h1>
              <p>Web desarrollada con Html, Css y JavaScript</p>
              <div className="iconpluslink">
                <div className="icon">
                  <FaHtml5 />
                </div>
                <div className="icon">
                  <FaCss3Alt />
                </div>
                <div className="icon">
                  <FaJs />
                </div>
              </div>
              <button>
                <a href='http://www.limonfotografia.com/' target="_blank">Ver Web </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="CardContent">
            <div className="CardImage">
              <img src={IMG3} alt="ProyectoWeb" className="gallery-img" />
            </div>
            <div className="CardText">
              <h1>
                Alvarez<span> Seguros</span>
              </h1>
              <p>Web desarrollada con Html, Css y JavaScript</p>
              <div className="iconpluslink">
                <div className="icon">
                  <FaHtml5 />
                </div>
                <div className="icon">
                  <FaCss3Alt />
                </div>
                <div className="icon">
                  <FaJs />
                </div>
              </div>
              <button>
                <a href='https://www.alvarezsegurostodoagro.com.uy/' target="_blank">Ver Web </a>
              </button>
         
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="CardContent">
            <div className="CardImage">
              <img src={IMG4} alt="ProyectoWeb" className="gallery-img" />
            </div>
            <div className="CardText">
              <h1>
                Learn<span> inc</span>
              </h1>
              <p>Colaboración creando Cursos online y WooComerce</p>
              <div className="iconpluslink">
                <div className="icon">
                  <FaWordpressSimple />
                </div>
              </div>

              <button>
                <a href='https://learninc.app/' target="_blank">Ver Web </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="CardContent">
            <div className="CardImage">
              <img src={IMG1} alt="ProyectoWeb" className="gallery-img" />
            </div>
            <div className="CardText">
              <h1>
                RFA <span>asociados</span>
              </h1>
              <p>Web desarrollada en wordpress.</p>
              <div className="iconpluslink">
                <div className="icon">
                  <FaWordpressSimple />
                </div>
              </div>
              <button>
                <a href='http://rfaasociados.com.uy/' target="_blank">Ver Web </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
