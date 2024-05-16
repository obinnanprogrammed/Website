import React from 'react';
import Header from './Header.js';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ProjectComp from './ProjectComp.js';
import scaleDict from '../pictures/scale-dict.png';
import swipeTern from '../pictures/swipetern.png';
import npcroom from '../pictures/npcroom.png';
import revRewards from '../pictures/revrewards.jpg';
import jpmcInternship from '../pictures/jpmc-internship.png';

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

    const projStacks = {
        scaleDictionary: [ "React Native", "MusicXML", "Expo" ],
        swipeTern: [ "React Native", "Firebase", "Expo" ],
        npcroom: [ "React", "Java", "Spring Boot", "MongoDB" ],
        revRewards: [ "React", "ChakraUI", "Django", "Tesseract" ],
        jpmcInternship: [ "React", "Java", "Spring Boot", "Apache Cassandra" ]
    }
    return (
        <>
            <Header />
            <Typography m={2} style={{ color: "white", textAlign: "center", margin: '3%' }} variant="h3">projects!</Typography>
            <Grid container justifyContent="space-around" alignItems="center" spacing={2} style={{ margin: '0 auto', maxWidth: '100%' }}>
                <Grid item lg={4} md={6} xs={12}>
                    <ProjectComp image={scaleDict} title="Scale Dictionary" 
                    description="An interactive scale dictionary for beginning musicians. Currently in the works." 
                    links={projLinks.scaleDictionary} techStack={projStacks.scaleDictionary} />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <ProjectComp image={swipeTern} title="SwipeTern" 
                    description="TAMUhack X Project. An app that eases communication between students
                    and internship recruiters." links={projLinks.swipeTern} techStack={projStacks.swipeTern}/>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <ProjectComp image={npcroom} title="NPCRoom" 
                    description="My flagship Aggie Coding Club Project. This project teaches team members
                    full stack development using React, Java, Spring Boot, and MongoDB by creating a simple,
                    but evolving NPC chat room." links={projLinks.npcroom} techStack={projStacks.npcroom}/>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <ProjectComp image={revRewards} title="Reveille Rewards" 
                    description="Winner of Best Small Business Hack at HowdyHack 2023. A web app that allows
                    users to scan receipts from small businesses and earn redeemable tokens." 
                    links={projLinks.revRewards} techStack={projStacks.revRewards}/>
                </Grid>
                <Grid item lg={6} md={12} xs={12}>
                    <ProjectComp image={jpmcInternship} title="JPMC Internship Project" 
                    description="The resulting project from a summer (June-Aug. 2022) internship with 
                    JP Morgan Chase. Retrieves data stored on an Apache Cassandra database and displays it
                    on React-based UI." links={projLinks.jpmcInternship} techStack={projStacks.jpmcInternship}/>
                </Grid>
            </Grid>
         </>
    )
}

export default Projects;