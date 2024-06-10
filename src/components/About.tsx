import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';
import Header from './Header';
import ImageCarousel from './ImageCarousel';

interface AboutProps {}
const About: FC<AboutProps> = () => {
    return (
        <>
            <Header />
            <Typography m={2} variant="h3" style={{ color: "white", textAlign: "center", margin: '3%'}}>
                about!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box m={2} sx={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: '600px' }}>
                    <Typography variant="body1">
                        Obinna Nwakwue was born in Houston, Texas in January 2005. He is currently a sophomore at
                        Texas A&M University, where he is pursuing a Bachelor's of Science in Computer Science. His goal
                        is to use software development to help advance music technology and education.
                    </Typography>
                    <Typography variant="body1">
                        Currently, he is involved in Aggie Coding Club, where he is in his second semester as a
                        Project Manager. His project, NPCRoom, teaches students about full stack web development 
                        using React, Java, Spring Boot, and MongoDB. He is also a member of the Texas A&M Computing Society
                        (Texas A&M's student chapter of the Assocation for Computing Machinery) as well as the Texas A&M
                        Chapter of the National Society of Black Engineers.
                    </Typography>
                    <Typography variant="body1">
                        Obinna enjoys developing projects that help other people out. Notably, he helped develop 
                        Reveille Rewards, the winner of the "Best Small Business Hack" at HowdyHack 2023. 
                        The web application rewards users for shopping at small businesses. Currently, he is working
                        on his ScaleDictionary project, which aims to provide beginning musicians an interactive
                        dictionary that can help them learn and practice musical scales.
                    </Typography>
                    <Typography variant="body1">
                        Outside of computer science, Obinna enjoys playing and composing music. He has composed several
                        pieces for trombone ensemble, brass ensemble, and concert band. He is also a member of the
                        Texas A&M University Trombone Choir.
                    </Typography>
                    <Typography variant="body1">
                        Obinna is open to internships, co-op opportunities, and any opportunity to develop his skillset
                        and knowledge of computer science and music technology. He can be contacted {<Link href="/links">here</Link>}.
                    </Typography>
                </Box>
                {/*<img m={2} src={proPic} alt="Obinna Nwakwue" width="40%" height="80%" /> */}
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: '600px' }}>
                    <ImageCarousel />
                </Box>
                
            </Box>
        </>
        
    )
}

export default About;