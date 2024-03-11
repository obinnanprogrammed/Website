import React from 'react';
import Header from './Header.js';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ProjectComp from './ProjectComp.js';
import website from '../pictures/website.jpg';

function Projects() {
    const projLinks = {
        scaleDictionary: [
            { url: "https://www.github.com/obinnanprogrammed/ScaleDictionary", text: "Github" }
        ],
        swipeTern: [
            { url: "https://www.github.com/obinnanprogrammed/tamuhack2024", text: "Github"},
            { url: "https://devpost.com/software/lalala-kzb9fw", text: "Devpost" }
        ],
        npcroom: [
            { url: "https://www.github.com/obinnanprogrammed/NPCRoom", text: "Github" }
        ],
        revRewards: [
            { url: "https://www.github.com/TrexKalp/HowdyHack_", text: "Github" },
            { url: "https://devpost.com/software/revrewards", text: "Devpost"}
        ],
        jpmcInternship: [
            { url: "https://github.com/tanvi-b/JPMC2022-Project-Group-2", text: "Github" }
        ]
    }
    return (
        <>
            <Header />
            <Typography style={{ textAlign: "center" }} variant="h3">Projects!</Typography>
            <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                <Grid item xs={4}>
                    <ProjectComp image={website} title="Scale Dictionary" 
                    description="An interactive scale dictionary for beginning musicians. Currently in the works." 
                    links={projLinks.scaleDictionary} />
                </Grid>
                <Grid item xs={4}>
                    <ProjectComp image={website} title="SwipeTern" 
                    description="TAMUhack X Project. An app that eases communication between students
                    and internship recruiters." links={projLinks.swipeTern} />
                </Grid>
                <Grid item xs={4}>
                    <ProjectComp image={website} title="NPCRoom" 
                    description="My flagship Aggie Coding Club Project. This project teaches team members
                    full stack development using React, Java, Spring Boot, and MongoDB by creating a simple,
                    but evolving NPC chat room." links={projLinks.npcroom} />
                </Grid>
                <Grid item xs={6}>
                    <ProjectComp image={website} title="Reveille Rewards" 
                    description="Winner of Best Small Business Hack at HowdyHack 2023. A web app that allows
                    users to scan receipts from small businesses and earn redeemable tokens." 
                    links={projLinks.revRewards} />
                </Grid>
                <Grid item xs={6}>
                    <ProjectComp image={website} title="JPMC Internship Project" 
                    description="The resulting project from a summer (June-Aug. 2022) internship with 
                    JP Morgan Chase. Retrieves, populates, and displays Apache Cassandra data tables 
                    and displays it on React-based UI." links={projLinks.jpmcInternship} />
                </Grid>
            </Grid>
         </>
    )
}

export default Projects;