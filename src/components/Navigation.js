import React from 'react';
import { Link} from "react-scroll";

const Navigation = () => {  
    return (
        <nav>
            <Link 
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Accueil
            </Link>
            <Link 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Projets
            </Link>
            <Link 
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Compétences
            </Link>
        </nav>
    );
};

export default Navigation;