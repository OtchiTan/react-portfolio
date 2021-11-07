import { Container, Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const ProjectList = () => {  

    const [appState, setAppState] = useState()

    useEffect(() => {
        Axios.get('http://otchi.games:8001/project/').then((res) => {
            var Projets = res.data.map(projet => <ProjectCard data={projet}/>)
            setAppState(Projets)
        })
    }, [setAppState,appState])

    return (
        <div>
            <Navigation/>
            <Container maxWidth="xl" sx={{marginY:"2rem"}}>
                <Grid container lg={12} spacing={2}>
                    {appState}
                </Grid>
            </Container>
            <Box sx={{height:"1rem"}}/>
        </div>
    );
}

export default ProjectList;