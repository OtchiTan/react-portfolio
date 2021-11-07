import { AppBar, Button, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Navigation = () => {
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="static" sx={{bgcolor:"primary.dark"}}>
                <Toolbar sx={{display:'flex', justifyContent:'space-evenly'}}>
                    <Button color="inherit" href="/">Accueil</Button>
                    <Button color="inherit" href="/projects">Projets</Button>
                    <Button color="inherit" href="/skills">Compétences</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;