import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material';
import Navigation from '../components/Navigation';

const ProjectContent = (props) => {

    return (
        <Card sx={{maxWidth: "80%", marginY:"1rem"}}>
            <CardHeader title={props.data.title}/>
            <CardMedia component="img" image={props.data.imgUrl}/>
            <CardContent>
                <Typography>{props.data.desc}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More</Button>
            </CardActions>
        </Card>
    )
}

const Projets = () => {
    const Axios = require('axios')
    let projectData;
    Axios.get('http://otchi.games:8001').then((res) => {
        projectData = res.data
    })
    console.log(projectData)
    var Projets;

    for (var projet in projectData){
        console.log("Test")
        Projets += <ProjectContent data={projet}/>
    }

    console.log(Projets)

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
                {Projets}
            </Container>
        </div>
    );
};

export default Projets;