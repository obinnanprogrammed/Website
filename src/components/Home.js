import React from 'react';
import Typography from '@mui/material/Typography';
import Header from './Header.js';
import Highlight from './Highlight.js';
import website from '../pictures/website.jpg';
import { Box } from '@mui/material';

function Home() {
    return (
        <>
            <Header />
            <Typography variant="h3" style={{ textAlign: "center" }}>welcome, you awesome person!</Typography>
            <Typography variant="h5" m={2}
                style={{ fontWeight: "bold", fontStyle: "italic", textDecoration: "underline" }}>Highlights</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <Highlight header="Website in development!" image={website} alt="Obinna Nwakwue's website"
                    text="My website is currently in development!" date="10 March 2024" />
                <Highlight header="Website in development!" image={website} alt="Obinna Nwakwue's website"
                    text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
                    ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                     Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
                     molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" 
                     date="1 January 1900" />
            </Box>
            
        </>
    )
}

export default Home;