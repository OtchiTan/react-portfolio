import { Typography, Button, ButtonGroup } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Project = (props) => {

    const data = props.data

    if (!props.isRight) {
        return (
            <article className='projectContent'>
                <div className='text'>
                    <Typography variant='h5'>{data.title}</Typography>
                    <Typography variant='h7'>{data.type}</Typography>
                    <Typography variant='p'>{data.text.desc}</Typography>
                    <Box flexGrow={1}/>
                    <ButtonGroup variant='contained' aria-label='outlined button group' color='secondary'>
                        <Button color='secondary' variant='contained'>Plus d'info</Button>
                        <Button color='secondary'>Code source</Button>
                    </ButtonGroup>
                </div>
                <img src={'http://otchi.games:8001/project/img/'+data.imgUrl} alt={data.imgAlt}/>
            </article>
        );
    } else {
        return (
            <article className='projectContent'>
                <img src={'http://otchi.games:8001/project/img/'+data.imgUrl} alt={data.imgAlt}/>
                <div className='text'>
                    <Typography variant='h5'>{data.title}</Typography>
                    <Typography variant='h7'>{data.type}</Typography>
                    <Typography variant='p'>{data.text.desc}</Typography>
                </div>
            </article>
        );
    }    
};

export default Project;