import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const axios = require('axios')


/*function PorjectContent(props){
    return (
        <Container sx={{display:'flex'}}>
            <Box sx={{border:'solid black'}}>

            </Box>
            <Box sx={{border:'solid black'}}>
                <img src={props.imgUrl} alt={props.imgAlt} />
            </Box>
        </Container>
    )
}
*/
const Projets = () => {
    const [test, setTest] = useState("")
    
    axios.get('http://localhost:8000')
            .then((res) => {
                setTest(res.data)
            })

    return (
        <div>
            <Navigation/>
            <Container maxWidth='md' sx={{ marginY:'2%' }}>
                <Typography variant="h3">Projets</Typography>
                {test}
            </Container>
        </div>
    );
};

export default Projets;