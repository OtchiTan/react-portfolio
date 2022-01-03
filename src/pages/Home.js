import React from 'react';
import Navigation from '../components/Navigation';
import { Button, Paper, Typography } from '@mui/material'
import Project from '../components/Project';
import axios from 'axios';
import { Box } from '@mui/system';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ContactsIcon from '@mui/icons-material/Contacts';

export default class Home extends React.Component {
    state = {
        projects: []
    }
    
    componentDidMount() {
        axios.get('https://otchi.games:8001/project/')
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

        const copyMailHandle = () => {
            navigator.clipboard.writeText("adamgragnic@gmail.com")
        }
        
        const copyTelHandle = () => {
            navigator.clipboard.writeText("0785261084")
        }

        const copyDiscordHandle = () => {
            navigator.clipboard.writeText("Otchi#2078")
        }
        
        return (
            <Box>
                <Navigation/>
                <Box className='anchor' id='home' sx={{height:"100vh", display:'grid', gridTemplateRows:'10rem 1fr'}}>
                    <Box>
                        <Typography variant='h3' sx={{marginTop:"4rem", marginLeft:"1rem"}}>Otchi - Portfolio</Typography>
                        <Typography variant='h4' sx={{color:"secondary.dark", marginLeft:"1rem"}}>Adam Gragnic</Typography>
                    </Box>
                    <Paper sx={{margin:"2rem", padding:"2rem", display:'flex', flexDirection:'column', justifyContent:'center',alignItems:"center"}} variant="elevation" elevation={4}>
                        <Typography variant='h5' color='primary'>
                            Portfolio en cours de développement
                        </Typography>
                        <br/><br/>
                        <Typography variant='h5' textAlign="center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam ducimus eligendi nam, ullam, quo autem earum odit sit,
                            sapiente aut ipsum nostrum tempore eum laudantium voluptas quam magnam culpa!
                        </Typography>
                    </Paper>
                </Box>

                <Box className='anchor' id='projects' sx={{minHeight:"100vh"}}>
                    <Typography variant='h3' sx={{marginLeft:"1rem"}}>Projets</Typography>
                    <Box className='projectList'>
                        {projectList}
                    </Box>
                </Box>

                <Box className='anchor' id='contact' sx={{minHeight:"100vh", display:"grid", gridTemplateRows:"3rem 1fr 5rem"}}>
                    <Typography variant='h3' sx={{marginLeft:"1rem"}}>Contact</Typography>
                    <Paper elevation={3} sx={{marginTop:"2rem", marginX:"3rem", display:"flex", justifyContent:'center', alignItems:'center'}}>
                        <Box sx={{height:'80%',width:'80%', display:'grid',gridTemplateRows:'repeat(5,1fr)'}}>
                            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <ContactMailIcon color='secondary'/>
                                <Button variant='outlined' href='mailto: adamgragnic@gmail.com' sx={{marginX:'3rem'}}>adamgragnic@gmail.com</Button>
                                <Button variant='contained'  onClick={copyMailHandle}>Copié</Button>
                            </Box>
                            
                            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <PhoneAndroidIcon color='secondary'/>
                                <Button variant='outlined' href='tel:0785261084' sx={{marginX:'3rem'}}>07 85 26 10 84</Button> 
                                <Button variant='contained'  onClick={copyTelHandle}>Copier</Button>
                            </Box>
                            
                            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <ContactsIcon color='secondary'/>
                                <Button variant='outlined' sx={{marginX:'3rem'}}>Otchi#2078</Button>
                                <Button variant='contained' onClick={copyDiscordHandle}>Copier</Button>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Button variant='outlined' href='https://github.com/OtchiTan'>GitHub</Button>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Button variant='outlined' href='https://gitlab.com/OtchiTan'>GitLab</Button>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        )
    }
}