import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Header from './Header.js';
import LinkComp from './LinkComp.js';
import github from '../pictures/github.svg';
import linkedin from '../pictures/linkedin.png';
import youtube from '../pictures/youtube.webp';
import resume from '../pictures/document.webp';
function Links() {
    return (
        <>
            <Header />
            <Typography m={2} style={{ textAlign: "center" }} variant="h3">While you're here, check out...</Typography>
            <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                <Grid item xs={3}>
                    <LinkComp icon={github} title="Github" link="https://www.github.com/obinnanprogrammed" />
                </Grid>
                <Grid item xs={3}>
                    <LinkComp icon={linkedin} title="LinkedIn" link="https://www.linkedin.com/in/obinwa05" />
                </Grid>
                <Grid item xs={3}>
                    <LinkComp icon={youtube} title="My Youtube Channel" link="https://www.youtube.com/channel/UC68UbNT1KakmlH7I4SrSXhA" />
                </Grid>
                <Grid item xs={3}>
                    <LinkComp icon={resume} title="Resume" link="https://drive.google.com/file/d/1NkcwqXLgUZB6V5ax-CQqvLQRce3ML6AO/view?usp=sharing" />
                </Grid>
            </Grid>
        </>
    )
}

export default Links;