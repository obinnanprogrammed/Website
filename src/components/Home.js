import React from 'react';
import Typography from '@mui/material/Typography';
import Header from './Header.js';
import Highlight from './Highlight.js';
import website from '../pictures/website.png';
import npcroom from '../pictures/npcroom.png';
import swipeTern from '../pictures/swipetern.png';
import npcroomUpdate from '../pictures/login-screen.png';
import { Box } from '@mui/material';

function Home() {
    return (
        <>
            <Header />
            <Typography variant="h3" style={{ color: "white", textAlign: "center", margin: '3%'}}>welcome, you awesome person!</Typography>
            <Typography variant="h5" m={2}
                style={{ color: "white", fontWeight: "bold", fontStyle: "italic", textDecoration: "underline" }}>Highlights</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <Highlight header="NPCRoom deployed!" image={npcroomUpdate} alt="NPCRoom login screen"
                    text="I am proud to announce that my flagship Aggie Coding Club project, NPCRoom, has finally been deployed! I plan to add registration, conversation saving, and more in 
                    future iterations of the project. Check it out at npcroom.vercel.app (link is in Projects). 
                    Use username: sample and password: 12345 for login." date="17 May 2024" />
                <Highlight header="Website launched!" image={website} alt="Obinna Nwakwue's website"
                    text="I have launched my website! Come see my projects, accomplishments, and aspirations!" date="12 March 2024" />
                <Highlight header="Season 2 of NPCRoom!" image={npcroom} alt="NPCRoom!"
                    text="I began the second round of my signature Aggie Coding Club project, NPCRoom! This time, it is a learning-based project
                    where students will learn full-stack web development with React, Java, Spring Boot, and MongoDB!" date="23 February 2024" />
                <Highlight header="TAMUhack X!" image={swipeTern} alt="TAMUhack X!"
                    text="I competed in the tenth anniversary TAMUhack competition alongside my friends Peter Phan, Sophia Phu, and Jyo Madhavarapu.
                    Together we created SwipeTern, an app that allows students and internship recruiters to swipe on each other, match, and communicate easier." date="27-28 January 2024" />
            </Box>
        </>
    )
}

export default Home;