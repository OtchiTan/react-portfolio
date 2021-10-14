import { Container } from '@mui/material';
import React from 'react';
import Navigation from '../components/Navigation';

const Competences = () => {
    return (
        <div>
            <Navigation/>
            <Container maxWidth='md' sx={{ marginY:'2%' }}>
                Compétences
            </Container>
        </div>
    );
};

export default Competences;