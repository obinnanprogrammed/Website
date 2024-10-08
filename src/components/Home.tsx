import Header from './Header';
import Footer from './Footer';
import Highlight from './Highlight';
import { Box, Typography } from '@mui/material';

const website = require('../pictures/website.png');
const npcroom = require('../pictures/npcroom.png');
const swipeTern = require('../pictures/swipetern.png');
const npcroomUpdate = require('../pictures/login-screen.png');
const tutoring = require('../pictures/tutoring.jpg');

export default function Home() {
    return (
        <>
            <Header />
            <Typography variant="h3" style={{ color: "white", textAlign: "center", margin: '3%', fontWeight: "bold" }}>welcome, you awesome person!</Typography>
            <Typography variant="h5" m={2}
                style={{ color: "white", fontWeight: "bold", fontStyle: "italic", textDecoration: "underline" }}>Highlights</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', marginRight: '24px', marginBottom: '12px' }}>
                <Highlight header="A Tutor and a Peer Teacher!" image={tutoring} alt="Stock tutoring image"
                    text="This semeseter, I began my roles as a tutor for Texas A&M's Math Learning Center (MLC) and a peer teacher for
                    ENGR 102, the introductory engineering class at Texas A&M. I love getting opportunities to teach because helping others
                    learn concepts is highly rewarding. As a MLC tutor, I get to help students with calculus 3, and as a peer teacher, I get to help
                    students learn fundamental programming and engineering principles as they learn to code in Python." date="23 August 2024" />
                <Highlight header="NPCRoom deployed!" image={npcroomUpdate} alt="NPCRoom login screen"
                    text="I am proud to announce that my flagship Aggie Coding Club project, NPCRoom, has finally been deployed! I plan to add registration, conversation saving, and more in 
                    future iterations of the project. Check it out at npcroom.vercel.app (link is in Projects). 
                    Use username: sample and password: 12345 for login. Registration support will be added at a later time." date="17 May 2024" />
                <Highlight header="Website launched!" image={website} alt="Obinna Nwakwue's website"
                    text="I have launched my website! Come see my projects, accomplishments, and aspirations!" date="12 March 2024" />
                <Highlight header="Season 2 of NPCRoom!" image={npcroom} alt="NPCRoom!"
                    text="I began the second round of my signature Aggie Coding Club project, NPCRoom! This time, it is a learning-based project
                    where students will learn full-stack web development with React, Java, Spring Boot, and MongoDB!" date="23 February 2024" />
                <Highlight header="TAMUhack X!" image={swipeTern} alt="TAMUhack X!"
                    text="I competed in the tenth anniversary TAMUhack competition alongside my friends Peter Phan, Sophia Phu, and Jyo Madhavarapu.
                    Together we created SwipeTern, an app that allows students and internship recruiters to swipe on each other, match, and communicate easier." date="27-28 January 2024" />
            </Box>
            <Footer />
        </>
    )
}