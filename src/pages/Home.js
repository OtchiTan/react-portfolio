import { Container, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {

    return (
        <div>
            <Navigation/>
            <Container maxWidth='md' sx={{ marginY:'2%' }}>
                <Typography variant='h3'>Titre</Typography>
                <Typography variant='h4'>Sous titre</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Obcaecati at atque repellendus officiis quibusdam officia. Dolores vero tempore,
                    sed aliquam, velit eos voluptatum ratione nisi earum eligendi voluptates eum pariatur.
                </Typography>
            </Container>
        </div>
    );
};

export default Home;