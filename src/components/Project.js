import { Typography, Button, Paper, Card, CardActions, CardContent, Modal } from '@mui/material';
import { Box } from '@mui/system';
import IframeResizer from 'iframe-resizer-react';
import React, { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height:'80%',
    bgcolor: '#222222',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY:'scroll'
  };

const Project = (props) => {    

    const data = props.data

    console.log(data.text.video);
    const videoComp = typeof data.text.video !== 'undefined' ? (
        <Box sx={{display:'flex',justifyContent:'center', width:'100%', height:'40vh', marginTop:'2rem'}}>
            <IframeResizer
                style={{width:'1px',minWidth:'50%'}}
                src={data.text.video} frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen title="YouTube video player"
            />
        </Box>
    ) : null

    const [open, setOpen] = useState(false)
    const handleOpen = _ => setOpen(true)
    const handleClose = _ => setOpen(false)

    const projectModal = (
        <Modal open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Box sx={{display:'flex',justifyContent:'space-between', px:'1rem'}}>
                    <Typography id="modal-modal-title" variant='h4'>{data.title}</Typography>
                    <Button variant='outlined' onClick={handleClose}>Fermer</Button>
                </Box>
                <Typography variant='h6' sx={{color:"secondary.dark", px:'1rem'}}>{data.type}</Typography>

                <Box id="modal-modal-description">
                    <Typography variant='p' sx={{margin:'2rem'}} className="projectDesc">
                        {data.text.desc}
                    </Typography>
                    <Box sx={{display:'flex',justifyContent:'space-evenly', marginTop:'2rem'}}>
                        <Box sx={{display:"flex"}}>
                            <Typography variant="h7">Langage :</Typography>
                            <Typography sx={{color:"secondary.dark", marginLeft:"0.5rem"}}>{data.text.langage}</Typography>
                        </Box>
                        <Box sx={{display:"flex"}}>
                            <Typography variant="h7">Framework :</Typography>
                            <Typography sx={{color:"secondary.dark", marginLeft:"0.5rem"}}>{data.text.framework}</Typography>
                        </Box>
                    </Box>
                    {videoComp}
                    <Box sx={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>
                        <img src={'https://otchi.games:8001/project/img/'+data.imgUrl} alt={data.imgAlt} style={{width:'70%'}}/>   
                    </Box>                 
                </Box>
            </Box>
        </Modal>
    )

    if (!props.isRight) {
        return (
            <Paper sx={{marginY:"1rem", paddingX:"1rem"}} elevation={3}>
                {projectModal}
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
                                    <Button color='primary' onClick={handleOpen}>Plus</Button>
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
                {projectModal}
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
                                    <Button color='primary' onClick={handleOpen}>Plus</Button>
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