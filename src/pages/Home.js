import { Container, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {

    return (
        <div>
            <Navigation/>
            <Container maxWidth='md' sx={{ marginY:'2%', height:"80vh", display:"flex", flexDirection:"column", justifyContent:"space-evenly" }}>
                <div>
                    <Typography variant='h3'>Otchi</Typography>
                    <Typography variant='h4'>Adam Gragnic</Typography>
                </div>
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