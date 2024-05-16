import React from 'react';
import { Button } from '@mui/material';


function LinkComp({ icon: Icon, title, link, backgroundcolor="#4E58D7" }) {
    return (
        <Button sx={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            padding: '8px',
            margin: '64px',
            bgcolor: '#4E58D7',
            transition: 'width 0.3s, padding 0.3s',
            width: '40px',
            '&:hover': {
              width: '120px',
              padding: '8px 16px',
              bgcolor: backgroundcolor,
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