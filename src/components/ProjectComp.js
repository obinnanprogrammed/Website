import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material'

function ProjectComp({ image, title, description, links }) {
    return (
        <Box m={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            {image && <img src={image} alt={title} style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: '50%', height: '200px' }} />}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {title && <Typography variant="h4" style={{ textAlign: "center" }}>{title}</Typography>}
                {description && <Typography variant="body1" style={{ textAlign: "center" }}>{description}</Typography>}
                {links && (
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {links.map((link, index) => (
                    <Link style={{color: "white", textDecoration: "underline", textAlign: "center" }} key={index} 
                    href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.text}
                    </Link>
                    ))}
                </Box>
                )}
            </Box>
        </Box>
    )
}

export default ProjectComp;