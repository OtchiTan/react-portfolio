import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../components/Navigation';
import Skill from '../components/skills/Skill';

const Skills = () => {
    return (
        <div>
            <Navigation/>
            <Container maxWidth='md' sx={{marginY:'2rem'}}>
                <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
                    <Box sx={{width:'100%', margin:'1.5rem'}}>
                        <Typography variant="h5">Langages</Typography>
                        <Skill name="HTML" value="100"/>
                        <Skill name="PHP" value="90"/>
                        <Skill name="CSS" value="85"/>
                        <Skill name="Java" value="70"/>
                        <Skill name="C++" value="40"/>
                        <Skill name="JS" value="20"/>
                    </Box>
                    <Box sx={{width:'100%', margin:'1.5rem'}}>
                        <Typography variant="h5">Framework & Libraries</Typography>
                        <Skill name="Laravel" value="70"/>
                        <Skill name="Code Igniter" value="60"/>
                        <Skill name="Discord.js" value="50"/>
                        <Skill name="Express" value="40"/>
                        <Skill name="Unreal Engine 4" value="35"/>
                        <Skill name="React" value="30"/>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h5" sx={{ gridColumn:'1/2'}}>Autres compétences</Typography>
                    <Skill name="MySQL" value="90"/>
                    <Skill name="NoSQL" value="80"/>
                </Box>
            </Container>
        </div>
    );
};

export default Skills;