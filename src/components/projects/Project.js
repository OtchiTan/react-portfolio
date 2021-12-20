import { Typography, Button, Paper, Card, CardActions, CardContent } from '@mui/material';
import React from 'react';

const Project = (props) => {

    const data = props.data

    if (!props.isRight) {
        return (
            <Paper sx={{marginY:"1rem", paddingX:"1rem"}}>
                <article>
                    <Paper variant="outlined" sx={{margin:"1rem"}}>
                        <div className='text'>
                            <Card>
                                <CardContent>
                                    <Typography variant='h4'>{data.title}</Typography>
                                    <Typography variant='h6'>{data.type}</Typography>
                                    <Typography variant='p' className="projectDesc">{data.text.desc}</Typography>
                                    
                                </CardContent>
                                <CardActions>
                                    <Button color='primary' href={"/project/"+data.projetId}>Plus d'info</Button>
                                    <Button color='primary' href={data.gitLink}>Code source</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Paper>
                    <img src={'http://otchi.games:8001/project/img/'+data.imgUrl} alt={data.imgAlt}/>
                </article>
            </Paper>
        );
    } else {
        return (
            <Paper sx={{marginY:"1rem", paddingX:"1rem"}}>
                <article>
                    <img src={'http://otchi.games:8001/project/img/'+data.imgUrl} alt={data.imgAlt}/>
                    <Paper variant="outlined" sx={{margin:"1rem"}}>
                        <div className='text'>
                            <Card>
                                <CardContent>
                                    <Typography variant='h4'>{data.title}</Typography>
                                    <Typography variant='h6'>{data.type}</Typography>
                                    <Typography variant='p' className="projectDesc">{data.text.desc}</Typography>
                                    
                                </CardContent>
                                <CardActions>
                                    <Button color='primary' href={"/project/"+data.projetId}>Plus d'info</Button>
                                    <Button color='primary' href={data.gitLink}>Code source</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Paper>
                </article>
            </Paper>
        );
    }    
};

export default Project;