import Header from './Header';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ProjectComp from './ProjectComp';
const website = require('../pictures/websitemay2024.png');
const scaleDict = require('../pictures/scale-dict.png');
const swipeTern = require('../pictures/swipetern.png');
const npcroom = require('../pictures/npcroom.png');
const revRewards = require('../pictures/revrewards.jpg');
const jpmcInternship = require('../pictures/jpmc-internship.png');

function Projects() {
    const projLinks = {
        website: [
            { url: "https://www.github.com/obinnanprogrammed/Website", text: "Github" }
        ],
        scaleDictionary: [
            { url: "https://www.github.com/obinnanprogrammed/ScaleDictionary", text: "Github" }
        ],
        swipeTern: [
            { url: "https://www.github.com/obinnanprogrammed/tamuhack2024", text: "Github"},
            { url: "https://devpost.com/software/lalala-kzb9fw", text: "Devpost" }
        ],
        npcroom: [
            { url: "https://www.github.com/obinnanprogrammed/NPCRoom", text: "Github" },
            { url: "http://npcroom.vercel.app", text: "Website!"}
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
        website: [ "React", "MaterialUI", "EmailJS" ],
        scaleDictionary: [ "React Native", "Vexflow", "Expo" ],
        swipeTern: [ "React Native", "Firebase", "Expo" ],
        npcroom: [ "React", "MaterialUI", "Spring Boot", "MongoDB" ],
        revRewards: [ "React", "ChakraUI", "Django", "Tesseract" ],
        jpmcInternship: [ "React", "Spring Boot", "Apache Cassandra" ]
    }
    return (
        <>
            <Header />
            <Typography m={2} style={{ color: "white", textAlign: "center", margin: '3%' }} variant="h3">projects!</Typography>
            <Grid container justifyContent="space-around" alignItems="center" spacing={2} style={{ margin: '0 auto', maxWidth: '100%' }}>
                <Grid item lg={4} md={6} xs={12}>
                    <ProjectComp image={website} title="My Website" 
                    description="My personal website, where my projects, accomplishments, and aspirations are stored." 
                    links={projLinks.website} techStack={projStacks.website} />
                </Grid>
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
                <Grid item lg={4} md={6} xs={12}>
                    <ProjectComp image={revRewards} title="Reveille Rewards" 
                    description="Winner of Best Small Business Hack at HowdyHack 2023. A web app that allows
                    users to scan receipts from small businesses and earn redeemable tokens." 
                    links={projLinks.revRewards} techStack={projStacks.revRewards}/>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
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