import React from 'react';
import {AppBar, Button, Toolbar} from "@mui/material"
import {Link} from "react-scroll";
import { Box } from '@mui/system';

const Navigation = () => {  
    return (
        <AppBar sx={{bgcolor:"primary.dark"}}>
            <Toolbar variant="dense">
                <Box flexGrow={1}/>
                <Button>
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
                </Button>

                <Box flexGrow={1}/>
                
                <Button>
                    <Link 
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-45}
                        duration={500}
                    >
                        Projets
                    </Link>
                </Button>

                <Box flexGrow={1}/>

                <Button>
                    <Link 
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={500}
                    >
                        Compétences
                    </Link>
                </Button>
                <Box flexGrow={1}/>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;