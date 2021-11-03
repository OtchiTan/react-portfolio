import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Axios from 'axios';

const ProjectContent = (props) => {
    return (
        <Card sx={{maxWidth: "80%", marginY:"1rem"}}>
            <CardHeader title={props.data.title}/>
            <CardMedia component="img" image={"http://localhost:8001/project/img/"+props.data.imgUrl}/>
            <CardContent>
                <Typography>{props.data.desc}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={"/projects/" + props.data.projetId}>Plus d'info</Button>
            </CardActions>
        </Card>
    )
}

const ProjectList = () => {  

    const [appState, setAppState] = useState()

    useEffect(() => {
        Axios.get('http://localhost:8001/project/').then((res) => {
            var Projets = res.data.map(projet => <ProjectContent data={projet}/>)
            setAppState(Projets)
        })
    }, [setAppState,appState])

    return (
        <div>
            <Navigation/>
            <Container maxWidth='md' sx={{ 
                marginY:'2%',
                display:"flex",
                flexDirection:"column",
                alignItems:"center" }}
                >
                <Typography variant="h3">Projets</Typography>
                {appState}
            </Container>
        </div>
    );
}

export default ProjectList;