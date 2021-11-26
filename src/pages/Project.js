import { Card, CardContent, CardHeader, CardMedia, Container } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../components/Navigation';
import ProjectNotFound from '../components/projects/ProjectNotFound';
import TextProject from '../components/projects/TextProject';

const Project = () => {

    const {id} = useParams()
    const apiRoute = "http://otchi.games:8001/project/" + id

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
                <Container maxWidth='lg' sx={{ 
                    marginY:'2%',
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center" }}
                    >
                    <Card sx={{width:"100%"}}>
                        <CardHeader title={appState.title} subheader={appState.text[3]}/>
                        <CardMedia component="img" image={"http://otchi.games:8001/project/img/"+appState.imgUrl}/>
                        <CardContent>
                            <TextProject desc={appState.text.desc} langage={appState.text.langage} framework={appState.text.framework} video={appState.text.video}/>                                       
                        </CardContent>
                    </Card>
                </Container>
        </div>
    )

    }
}

export default Project;