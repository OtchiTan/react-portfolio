import React from 'react';
import Navigation from '../components/Navigation';
import { Card, Container, Typography } from '@mui/material'
import Project from '../components/projects/Project';
import axios from 'axios';
import { Box } from '@mui/system';
import Skill from '../components/skills/Skill'

export default class Home extends React.Component {
    state = {
        projects: []
    }
    
    componentDidMount() {
        axios.get('http://otchi.games:8001/project/')
            .then(res => {
                const projects = res.data
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
            <div>
                <Navigation/>
                <div className='anchor' id='home'>
                    <Typography variant='h3' sx={{marginTop:"3rem"}}>Otchi - Portfolio</Typography>
                    <Typography variant='h4' sx={{color:"secondary.dark"}}>Adam Gragnic</Typography>
                    <Card sx={{margin:"2rem"}}>
                        <Typography variant='h6'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam ducimus eligendi nam, ullam, quo autem earum odit sit,
                            sapiente aut ipsum nostrum tempore eum laudantium voluptas quam magnam culpa!
                        </Typography>
                    </Card>
                </div>

                <div className='anchor' id='projects'>
                    <Typography variant='h3'>Projets</Typography>
                    <div className='projectList'>
                        {projectList}
                    </div>
                </div>

                <div className='anchor' id='skills'>
                    <Typography variant='h3'>Compétences</Typography>
                    <Container maxWidth='md' sx={{marginY:'2rem'}}>
                        <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
                            <Box sx={{width:'100%', margin:'1.5rem'}}>
                                <Typography variant="h5">Langages</Typography>
                                <Skill name="HTML" value="100"/>
                                <Skill name="PHP" value="90"/>
                                <Skill name="CSS" value="85"/>
                                <Skill name="Java" value="70"/>
                                <Skill name="C++" value="40"/>
                                <Skill name="JS" value="20"/>
                            </Box>
                            <Box sx={{width:'100%', margin:'1.5rem'}}>
                                <Typography variant="h5">Framework & Libraries</Typography>
                                <Skill name="Laravel" value="70"/>
                                <Skill name="Code Igniter" value="60"/>
                                <Skill name="Discord.js" value="50"/>
                                <Skill name="Express" value="40"/>
                                <Skill name="Unreal Engine 4" value="35"/>
                                <Skill name="React" value="30"/>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="h5" sx={{ gridColumn:'1/2'}}>Autres compétences</Typography>
                            <Skill name="MySQL" value="90"/>
                            <Skill name="NoSQL" value="80"/>
                        </Box>
                    </Container>
                    <Box><br/></Box>
                </div>
            </div>
        )
    }
}