import React from 'react';
import '../styles/gallery.scss'

import { FaWordpressSimple, FaCss3Alt, FaHtml5,FaJs,FaReact,FaSass } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";

import IMG1 from '../assets/GalleryIMG/Template-webs-RFAs.png';
import IMG2 from '../assets/GalleryIMG/Template-web-Limon.png';
import IMG3 from '../assets/GalleryIMG/Template-webs-ASseguros.png';
import IMG4 from '../assets/GalleryIMG/Template-webs-Learninc.png';


const Gallery = () => {
    return (
        <div className='Gallery'>
                   
            <div className="GridContainer">
            
                <div className="gallery-items">
                    <div className="TitleGallery">
                      <h1> Proyectos <span>web</span></h1> 
                    
                   </div> 
                </div>                   
                <div className="gallery-items">
                        <div className='CardContent'>
                            <div className="CardImage">
                                     <img src={IMG1} alt="ProyectoWeb" className="gallery-img" />                 
                            </div>

                            <div className="CardText">
                                    <h1>Agustín<span> Billar</span></h1>  
                                    <p>Web desarrollada en React</p>
                                   
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
                                    <button>Ver Web</button>
                         </div>
                </div>                      
            </div>                   
                <div className="gallery-items">
                    <div className='CardContent'>
                            <div className="CardImage">
                                <img src={IMG2} alt="ProyectoWeb" className="gallery-img" />      
                            </div>
                             <div className="CardText">
                                    <h1>Limón<span> Fotografía</span></h1>  
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
                                    
                                    <button>Ver Web</button>
                            </div>
                    </div>                               
                </div>                   
                 <div className="gallery-items">
                    <div className='CardContent'>
                                <div className="CardImage">
                                     <img src={IMG3} alt="ProyectoWeb" className="gallery-img" />                 
                                </div>
                                <div className="CardText">
                                    <h1>Alvarez<span> Seguros</span></h1>  
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
                                    <button>Ver Web</button>
                                </div>
                            </div>                                         
                    </div>                   
                    <div className="gallery-items">
                    <div className='CardContent'>
                                <div className="CardImage">
                                     <img src={IMG4} alt="ProyectoWeb" className="gallery-img" />                 
                                </div>
                                <div className="CardText">
                                    <h1>Learn<span>inc</span></h1>  
                                    <p>Colaboración creando Cursos online y WooComerce</p>
                                   <div className="iconpluslink">
                                    <div className="icon">
                                    <FaWordpressSimple />  
                                    </div>         
                                    </div>
                                    
                                    <button>Ver Web</button>
                                </div>
                            </div>                                    
                    </div>                   
                    <div className="gallery-items">
                    <div className='CardContent'>
                                <div className="CardImage">
                                     <img src={IMG1} alt="ProyectoWeb" className="gallery-img" />                 
                                </div>
                                <div className="CardText">
                                    <h1>RFA <span>asociados</span></h1>  
                                    <p>Web desarrollada en wordpress.</p>
                                   <div className="iconpluslink">
                                        <div className="icon">
                                    <FaWordpressSimple />  
                                    </div>         
                                    
                                    </div>
                                    <button>Ver Web</button>
                                </div>
                            </div>                                         
                    </div>                   
                 
            </div>
        </div>

    );
}

export default Gallery;