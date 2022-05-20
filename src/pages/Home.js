import React from 'react';
import Navigation from '../components/Navigation';
import { Button, Paper, Typography } from '@mui/material'
import Project from '../components/Project';
import axios from 'axios';
import { Box } from '@mui/system';

export default class Home extends React.Component {
    state = {
        projects: []
    }
    
    componentDidMount() {
        axios.get('https://otchi.games:8001/project/')
            .then(res => {
                var projects = res.data
                this.setState({projects})
            })
    }

    render() {
        const projectList = []

        for (var i = 0; i < this.state.projects.length; i++) {
            var project = this.state.projects[i]
            projectList.push(<Project data={project} isRight={i%2} />)
        }
        
        return (
            <Box>
                <Navigation/>

                <Box className='anchor' id='home' sx={{height:"100vh", display:'grid', gridTemplateRows:'10rem 1fr'}}>
                    <Box>
                        <Typography variant='h3' sx={{marginTop:"4rem", marginLeft:"1rem"}}>Otchi - Portfolio</Typography>
                        <Typography variant='h4' sx={{color:"secondary.dark", marginLeft:"1rem"}}>Adam Gragnic</Typography>
                    </Box>
                    <Paper sx={{margin:"2rem", padding:"4rem", display:'flex', flexDirection:'column'}} variant="elevation" elevation={4}>
                        <Typography variant='h4' color='primary'>
                            Développeur Web - Jeux Vidéo
                        </Typography>
                        <br/><br/>
                        <Typography variant='h5' sx={{textIndent:'2rem', marginTop:'1rem'}}>
                            Je suis un étudiant en programmation. J'ai commencer le développement il y a maintenant 2 ans, avec du 
                            jeux vidéo sur Unreal Engine, que je continue toujours aujourd'hui. Je me suis aussi former sur le développement
                            web, principalement en Back End que ce soit en PHP ou en JS. J'ai aussi appris à réaliser des applications en Java
                            que se soit pour Windows ou pour Android.
                        </Typography>
                        <br/>
                        <Typography variant='h5' sx={{textIndent:'2rem', marginTop:'1rem'}}>
                                Vous pourrez suivre les avancements de mes différents projets au travers de ce Portfolio. J'utilise
                                les services de GitHub pour versionner mes applications et GitLab pour mes jeux.
                        </Typography>
                        
                        <Box flexGrow={1}/>
                        <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                            <Button variant='outlined' sx={{mx:'1rem'}} href='https://gitlab.com/OtchiTan'>Gitlab</Button>
                            <Button variant='outlined' sx={{mx:'1rem'}} href='https://github.com/OtchiTan'>Github</Button>
                            <Button href='mailto: adamgragnic@gmail.com' sx={{mx:'1rem'}}>adamgragnic@gmail.com</Button>
                        </Box>
                    </Paper>
                </Box>

                <Box className='anchor' id='projects' sx={{minHeight:"100vh"}}>
                    <Typography variant='h3' sx={{marginLeft:"1rem"}}>Projets</Typography>
                    <Box className='projectList'>
                        {projectList}
                    </Box>
                </Box>
            </Box>
        )
    }
}