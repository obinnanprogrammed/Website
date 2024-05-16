import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Header from './Header.js';
import LinkComp from './LinkComp.js';
import ContactForm from './ContactForm.js';

import {ReactComponent as Github} from '../pictures/icons8-github.svg';
import {ReactComponent as LinkedIn} from '../pictures/iconmonstr-linkedin-4.svg';
import {ReactComponent as Youtube} from '../pictures/icons8-youtube.svg';
import {ReactComponent as Resume} from '../pictures/icons8-document.svg';
import {ReactComponent as Email} from '../pictures/email.svg';

function Links() {
    return (
        <>
            <Header />
            <Typography m={2} style={{ color: "white", textAlign: "center", margin: '3%' }} variant="h3">while you're here, check out...</Typography>
            <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <Grid item xs={12} lg={6}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: '8px' }}>
                            <LinkComp icon={Github} title="Github" link="https://www.github.com/obinnanprogrammed" backgroundcolor="white" />
                            <LinkComp icon={Youtube} title="Youtube" link="https://www.youtube.com/channel/UC68UbNT1KakmlH7I4SrSXhA" backgroundcolor="red" />
                        </Box>
                        <Box sx={{alignItems: "center", padding: '8px'}}>
                            <LinkComp icon={LinkedIn} title="LinkedIn" link="https://www.linkedin.com/in/obinwa05" />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: '8px' }}>
                            <LinkComp icon={Resume} title="Resume" link="https://drive.google.com/file/d/1RMiHkp0b16b2tCQ-0u13b5eQYZttUyL4/view?usp=sharing" />
                            <LinkComp icon={Email} title="Email" link="mailto:obinnanwakwue10@gmail.com" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <ContactForm />
                </Grid>
            </Grid>
            {/* <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                <Grid item xs={4}>
                    <LinkComp icon={github} title="Github" link="https://www.github.com/obinnanprogrammed" />
                </Grid>
                <Grid item xs={4}>
                    <LinkComp icon={linkedin} title="LinkedIn" link="https://www.linkedin.com/in/obinwa05" />
                </Grid>
                <Grid item xs={4}>
                    <LinkComp icon={youtube} title="My Youtube Channel" link="https://www.youtube.com/channel/UC68UbNT1KakmlH7I4SrSXhA" />
                </Grid>
                <Grid item xs={6}>
                    <LinkComp icon={resume} title="Resume" link="https://drive.google.com/file/d/1NkcwqXLgUZB6V5ax-CQqvLQRce3ML6AO/view?usp=sharing" />
                </Grid>
                <Grid item xs={6}>
                    <LinkComp icon={email} title="Email Me!" link="mailto:obinnanwakwue10@gmail.com" />
                </Grid>
            </Grid> */}
        </>
    )
}

export default Links;