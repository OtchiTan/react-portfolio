import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../components/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation/>
            <Container maxWidth='md' sx={{ marginY:'2%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'60vh'}}>
                <Typography variant='h3' sx={{marginY:'2rem'}}>Error 404 Not Found</Typography>
                <Button size="large" href='/'>Return to home</Button>
            </Container>
        </div>
    );
};

export default NotFound;