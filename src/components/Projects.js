import React from 'react';
import Header from './Header.js';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import ProjectComp from './ProjectComp.js';
import website from '../pictures/website.jpg';

function Projects() {
    const projLinks = {
        scaleDictionary: [
            { url: "https://www.github.com/obinnanprogrammed/ScaleDictionary", text: "Github" }
        ]
    }
    return (
        <>
            <Header />
            <Typography m={2} variant="h3">In the Works!</Typography>
            <Box m={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start',gap: '16px'}}>
                <ProjectComp image={website} title="Scale Dictionary" 
                description="An interactive scale dictionary for beginning musicians." links={projLinks.scaleDictionary} />
            </Box>
            <Typography m={2} variant="h3">Past Projects</Typography>
            {/* Grid or Box for past projects*/}
         </>
    )
}

export default Projects;