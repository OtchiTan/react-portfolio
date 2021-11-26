import { Button, Container, Typography } from '@mui/material';
import React from 'react';

const ProjectNotFound = () => {
    return (
        <Container maxWidth='md' sx={{ marginY:'2%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'60vh'}}>
            <Typography variant='h3' sx={{marginY:'2rem'}}>Le projet n'as pas été trouvé</Typography>
            <Button size="large" href='/projects'>Retourner aux projets</Button>
        </Container>
    );
};

export default ProjectNotFound;