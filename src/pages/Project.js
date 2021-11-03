import { Container, Typography } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../components/Navigation';
import ProjectNotFound from '../components/ProjectNotFound';

const Project = () => {

    const {id} = useParams()
    const apiRoute = "http://localhost:8001/project/" + id

    const [appState, setAppState] = useState()

    useEffect(() => {
        Axios.get(apiRoute).then((res) => {
            var Projets = res.data
            setAppState(Projets)
        })
    }, [setAppState,appState])

    if (appState == null) {
        return (
            <div>
                <Navigation/>
                <Container maxWidth='md' sx={{ 
                    marginY:'2%',
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center" }}
                    >
                    <ProjectNotFound/>
                </Container>
    
            </div>
        )
    } else {
        return (
        <div>
            <Navigation/>
            <Container maxWidth='md' sx={{ 
                marginY:'2%',
                display:"flex",
                flexDirection:"column",
                alignItems:"center" }}
                >
                <Typography variant="h3">{appState.title}</Typography>
                <Typography variant="h6" sx={{marginY:'2rem'}}>{appState.desc}</Typography>
                <img src={"http://localhost:8001/project/img/"+appState.imgUrl}/>
            </Container>
        </div>
    )

    }
}

export default Project;