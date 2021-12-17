import React from 'react';
import Navigation from '../components/Navigation';
import { Typography } from '@mui/material'
import Project from '../components/projects/Project';
import axios from 'axios';

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
                    <Typography variant='h3'>Acceuil</Typography>
                </div>

                <div className='anchor' id='projects'>
                    <Typography variant='h3'>Projets</Typography>
                    <div className='projectList'>
                        {projectList}
                    </div>
                </div>

                <div className='anchor' id='skills'>
                    <Typography variant='h3'>Compétences</Typography>
                </div>
            </div>
        )
    }
}