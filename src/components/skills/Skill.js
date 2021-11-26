import { LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Languages = (props) => {
    return (
        <Box sx={{marginY:'1rem'}}>
            <Typography variant="p">{props.name}</Typography>
            <LinearProgress variant="determinate" value={props.value}/>
        </Box>
    );
};

export default Languages;