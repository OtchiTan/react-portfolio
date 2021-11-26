import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TextProject = (props) => {
    var video = <div/>

    if (props.video !== undefined){
        video = (
            <Box flexGrow={1} sx={{display:"flex", justifyContent:"center"}}>
                <iframe width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </Box>
        )
    }

    return (
        <>
            <Typography sx={{marginY:"1rem"}}>
                {props.desc}
            </Typography>
            <Box sx={{display:"flex", justifyContent:"space-evenly", marginY:"1rem"}} flexGrow={1}>
                <Typography>{props.langage}</Typography>
                <Typography>{props.framework}</Typography>
            </Box>
            {video}
        </>
    );
};

export default TextProject;