import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Header from './Header';
import LinkComp from './LinkComp';
import ContactForm from './ContactForm';

const Github: string = require('../pictures/icons8-github.svg').default;
const LinkedIn: string = require('../pictures/iconmonstr-linkedin-4.svg').default;
const Youtube: string = require('../pictures/icons8-youtube.svg').default;
const Resume: string = require('../pictures/icons8-document.svg').default;
const Email:string = require('../pictures/email.svg').default;

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
                            <LinkComp icon={LinkedIn} title="LinkedIn" link="https://www.linkedin.com/in/obinwa05" backgroundcolor="blue" />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: '8px' }}>
                            <LinkComp icon={Resume} title="Resume" link="https://drive.google.com/file/d/1C-5Sip8R5dNCuz50Sv3zeNpPrOORugdZ/view?usp=sharing" backgroundcolor="#34ebe8" />
                            <LinkComp icon={Email} title="Email" link="mailto:obinnanwakwue10@gmail.com" backgroundcolor="green" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <ContactForm />
                </Grid>
            </Grid>
        </>
    )
}

export default Links;