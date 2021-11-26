import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const ProjectCard = (props) => {
    return (
        <Grid item lg={4} sx={{display:"flex", justifyContent:"center"}}>
            <Card sx={{maxWidth: "90%", marginY:"1rem"}}>
                <CardHeader title={props.data.title} subheader={props.data.type}/>
                <CardMedia component="img" image={"http://otchi.games:8001/project/img/"+props.data.imgUrl}/>
                <CardContent>
                    <Typography>{props.data.desc}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={"/projects/" + props.data.projetId}>Plus d'info</Button>
                    <Button size="small" href={props.data.gitLink}>Code</Button>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default ProjectCard;