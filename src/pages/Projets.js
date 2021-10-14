import { Container, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../components/Navigation';

const Projets = () => {
    return (
        <div>
            <Navigation/>
            <Container maxWidth='md' sx={{ marginY:'2%' }}>
                <Typography variant="h3">Projets</Typography>
                <Projets/>
                <Projets/>
            </Container>
        </div>
    );
};

export default Projets;