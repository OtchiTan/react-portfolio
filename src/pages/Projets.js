import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material';
import Navigation from '../components/Navigation';

const ProjectContent = (props) => {
    return (
        <Card sx={{maxWidth: "80%", marginY:"1rem"}}>
            <CardHeader title={props.title}/>
            <CardMedia component="img" image={props.imgUrl}/>
            <CardContent>
                <Typography>{props.desc}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More</Button>
            </CardActions>
        </Card>
    )
}

const Projets = () => {
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
                <ProjectContent title="Captain Battle" imgUrl="/cb_1.jpg" desc="Desc 1"/>
                <ProjectContent title="Magic Project" imgUrl="/mp_1.jpg" desc="Desc 2"/>
            </Container>
        </div>
    );
};

export default Projets;