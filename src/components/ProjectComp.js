import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material'

function ProjectComp({ image, title, description, links }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            {image && <img src={image} alt="Project" style={{ width: '200px', height: '200px' }} />}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {title && <Typography variant="h3">{title}</Typography>}
                {description && <Typography variant="body1">{description}</Typography>}
                {links && (
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {links.map((link, index) => (
                    <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
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