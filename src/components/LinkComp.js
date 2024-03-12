import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';

function LinkComp({ icon, title, link }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link href={link} target="_blank" rel="noopener noreferrer">
                {icon && <img src={icon} alt={title} 
                style={{ display: "block", marginLeft: "auto", marginRight: "auto", 
                width: '60%', height: '200px' }} />}
            </Link>
            <Typography variant="h5" style={{ textAlign: "center" }}>{title}</Typography>
        </Box>
    )
}

export default LinkComp;