import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import ImageCarousel from './ImageCarousel';

export default function About() {
    return (
        <>
            <Header />
            <Typography m={2} variant="h3" style={{ color: "white", fontWeight: "bold", textAlign: "center", margin: '3%'}}>
                about me!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box m={2} sx={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: '600px' }}>
                    <Typography variant="body1">
                        Obinna Nwakwue was born in Houston, Texas in January 2005. He is currently a sophomore at
                        Texas A&M University, where he is pursuing a Bachelor's of Science in Computer Science. His goal
                        is to use software development to advance music technology and education.
                    </Typography>
                    <Typography variant="body1">
                        Obinna is most involved in Aggie Coding Club, where he served as a Project Manager
                        for two semesters. His project, NPCRoom, teaches students about full stack web development 
                        using React, Java, Spring Boot, and MongoDB. He is also a member of the Texas A&M Computing Society
                        (Texas A&M's student chapter of the Assocation for Computing Machinery) and Texas A&M's
                        chapter of the National Society of Black Engineers.
                    </Typography>
                    <Typography variant="body1">
                        Obinna is also a Peer Teacher (PT) for ENGR 102, the Python Computation Lab class at Texas A&M. He helps 
                        students learn about fundamental programming and engineering principles as they learn to program in Python.
                    </Typography>
                    <Typography variant="body1">
                        Obinna enjoys developing projects that help other people out. Notably, he helped develop 
                        Reveille Rewards, the winner of the "Best Small Business Hack" at HowdyHack 2023. 
                        The web application rewards users for shopping at small businesses. Currently, he is working
                        on his "ScalesGalore!" project, which aims to provide beginning musicians an interactive
                        dictionary that helps them learn, practice, and master musical scales.
                    </Typography>
                    <Typography variant="body1">
                        Outside of computer science, Obinna enjoys playing and composing music. He has composed several
                        pieces for trombone ensemble, brass ensemble, and concert band. He is also a member of the
                        Texas A&M University Trombone Choir.
                    </Typography>
                    <Typography variant="body1">
                        Obinna is open to internships, co-op opportunities, and any opportunity to develop his skillset
                        and knowledge of computer science and music technology. He can be contacted {<Link to="/links">here</Link>}.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, maxWidth: '600px' }}>
                    <ImageCarousel />
                </Box>
            </Box>
            <Footer />
        </>
        
    )
}