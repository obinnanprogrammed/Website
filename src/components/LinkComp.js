import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link, Button } from '@mui/material';


function LinkComp({ icon: Icon, title, link, backgroundcolor }) {
    return (
        <Button sx={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            padding: '8px',
            transition: 'width 0.3s, padding 0.3s',
            width: '40px',
            '&:hover': {
              width: '120px',
              padding: '8px 16px',
              bgcolor: {backgroundcolor},
              color: 'black'
            },
            '& .MuiSvgIcon-root': {
              transition: 'margin-right 0.3s',
            },
            '& .text': {
              display: 'none',
              marginLeft: '8px',
              transition: 'display 0.3s',
              whiteSpace: 'nowrap',
            },
            '&:hover .text': {
              display: 'inline',
            },
          }} href={link} variant="outlined">
            <Icon />
            <span className="text">{title}</span>
        </Button>
    )
}

export default LinkComp;