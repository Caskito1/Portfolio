import React from 'react';
import '../styles/navbar.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineHome, AiOutlineUser, AiOutlineTool} from "react-icons/ai";
import { BsBriefcase, BsChatDots } from "react-icons/bs";



 

const Navbar = () => {
    



    return (
  

        <div>
        <ul className = 'Navbar'>
            <li>   
                <Link to="Intro" spy={true} smooth={true} duration={500} > <AiOutlineHome /></Link>
            </li>
            <li>
                <Link to="SobreMi" spy={true} smooth={true} duration={500} ><AiOutlineUser/></Link>
            </li>
            <li>
                <Link to="Proyectos" spy={true} smooth={true} duration={500} ><BsBriefcase/></Link>
            </li>
            <li>
                <Link to="Habilidades" spy={true} smooth={true} duration={500} ><AiOutlineTool/></Link>
            </li>
            <li>
                <Link to="Contacto" spy={true} smooth={true} duration={500} ><BsChatDots/></Link>
            </li>
         
        </ul>
    
        </div>
 
    );
}

export default Navbar;