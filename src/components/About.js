import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Header from './Header.js';
import proPic from '../pictures/FullSizeR.jpg';

function About() {
    return (
        <>
            <Header />
            <Typography m={2} variant="h3" style={{ color: "white", textAlign: "center", textDecoration: "underline", fontStyle: "italic", margin: '3%'}}>
                ABOUT
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box m={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body1">
                        Obinna Nwakwue was born in Houston, Texas in January 2005. He is currently a sophomore at
                        Texas A&M University, where he is pursuing a Bachelor's of Science in Computer Science. His goal
                        is to use software development to help advance music technology and education.
                    </Typography>
                    <Typography variant="body1">
                        Currently, he is involved in Aggie Coding Club, where he is in his second semester as a
                        Project Manager. His project, NPCRoom, teaches students about full stack web development 
                        using React, Java, Spring Boot, and MongoDB. He is also a member of Texas A&M Computing Society
                        (Texas A&M's student chapter of the Assocation for Computing Machinery) as well as the Texas A&M
                        Chapter of the National Society of Black Engineers.
                    </Typography>
                    <Typography variant="body1">
                        In addition to NPCRoom, Obinna has worked on several other software development projects.
                        Notably, he helped develop Reveille Rewards, the winner of the "Best Small Business Hack"
                        at HowdyHack 2023. The web app rewards users for shopping at small businesses. He is currently
                        working on two more notable projects. He is looking to expand his development skillset and knowledge of the
                        field of computer science. He is also open to internships and co-op opportunities.
                    </Typography>
                    <Typography variant="body1">
                        Outside of computer science, Obinna enjoys music and Pokémon.
                    </Typography>
                </Box>
                <img m={2} src={proPic} alt="Obinna Nwakwue" width="40%" height="80%" />
            </Box>
        </>
        
    )
}

export default About;