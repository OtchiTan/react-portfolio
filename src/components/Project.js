import { Typography, Button, Paper, Card, CardActions, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Project = (props) => {

    const data = props.data

    if (!props.isRight) {
        return (
            <Paper sx={{marginY:"1rem", paddingX:"1rem"}} elevation={3}>
                <Box className="article">
                    <Paper variant="outlined" sx={{margin:"1rem"}}>
                        <Box className='text'>
                            <Card sx={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                <CardContent>
                                    <Typography variant='h4'>{data.title}</Typography>
                                    <Typography variant='h6' sx={{color:"secondary.dark"}}>{data.type}</Typography>
                                    <br/>
                                    <Typography variant='p' className="projectDesc">{data.text.desc}</Typography>
                                    <Box sx={{marginTop:"2rem", display:"flex",justifyContent:"space-evenly"}}>
                                        <Box sx={{display:"flex"}}>
                                            <Typography variant="h7">Langage :</Typography>
                                            <Typography sx={{color:"secondary.dark", marginLeft:"0.5rem"}}>{data.text.langage}</Typography>
                                        </Box>
                                        <Box sx={{display:"flex"}}>
                                            <Typography variant="h7">Framework :</Typography>
                                            <Typography sx={{color:"secondary.dark", marginLeft:"0.5rem"}}>{data.text.framework}</Typography>
                                        </Box>
                                    </Box>                                    
                                </CardContent>
                                <CardActions>
                                    <Button color='primary' href={data.gitLink}>Code source</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Paper>
                    <img src={'https://otchi.games:8001/project/img/'+data.imgUrl} alt={data.imgAlt}/>
                </Box>
            </Paper>
        );
    } else {
        return (
            <Paper sx={{marginY:"1rem", paddingX:"1rem"}} elevation={4}>
                <Box className="article">
                    <img src={'https://otchi.games:8001/project/img/'+data.imgUrl} alt={data.imgAlt}/>
                    <Paper variant="outlined" sx={{margin:"1rem"}}>
                        <Box className='text'>
                            <Card sx={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                <CardContent>
                                    <Typography variant='h4'>{data.title}</Typography>
                                    <Typography variant='h6' sx={{color:"secondary.dark"}}>{data.type}</Typography>
                                    <br/>
                                    <Typography variant='p' className="projectDesc">{data.text.desc}</Typography>
                                    <Box sx={{marginTop:"2rem", display:"flex",justifyContent:"space-evenly"}}>
                                        <Box sx={{display:"flex"}}>
                                            <Typography variant="h7">Langage :</Typography>
                                            <Typography sx={{color:"secondary.dark", marginLeft:"0.5rem"}}>{data.text.langage}</Typography>
                                        </Box>
                                        <Box sx={{display:"flex"}}>
                                            <Typography variant="h7">Framework :</Typography>
                                            <Typography sx={{color:"secondary.dark", marginLeft:"0.5rem"}}>{data.text.framework}</Typography>
                                        </Box>
                                    </Box>                                    
                                </CardContent>
                                <CardActions>
                                    <Button color='primary' href={data.gitLink}>Code source</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Paper>
                </Box>
            </Paper>
        );
    }    
};

export default Project;