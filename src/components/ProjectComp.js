import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link, Button, Card, CardContent } from '@mui/material'

function ProjectComp({ image, title, description, links, techStack }) {
    const frameworkLinks = {
        "React": "https://react.dev/learn",
        "React Native": "https://reactnative.dev/docs/tutorial",
        "MaterialUI": "https://mui.com/material-ui/getting-started/learn/",
        "ChakraUI": "https://v1.chakra-ui.com/guides/first-steps",
        "Java": "https://www.codecademy.com/learn/learn-java",
        "Spring Boot": "https://spring.io/guides/gs/spring-boot",
        "Apache Cassandra": "https://cassandra.apache.org/_/cassandra-basics.html",
        "MongoDB": "https://www.mongodb.com/docs/manual/tutorial/getting-started/",
        "Firebase": "https://firebase.google.com/docs/functions/get-started?gen=2nd",
        "EmailJS": "https://www.emailjs.com/docs/tutorial/overview/",
        "Expo": "https://docs.expo.dev/tutorial/create-your-first-app/",
        "Vexflow": "https://github.com/0xfe/vexflow/wiki/Tutorial",
        "Tesseract": "https://nanonets.com/blog/ocr-with-tesseract/"
    }
    return (
        <Card mr={2} sx={{ backgroundColor: 'white', backgroundImage: 'linear-gradient(45deg, #931CAA 30%, #580AEA 90%)', margin: '16px', padding: '16px', borderRadius: '10px' }}>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '16px' }}>
                    {image && <img src={image} alt={title} style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: '80%', height: '200px', borderRadius: '10%' }} />}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '5%' }}>
                            {techStack.map((framework, index) => (
                                <Button sx={{ display: "flex", justifyContent: "center", 
                                    textAlign: "center", whiteSpace: "normal", wordWrap: "break-word" }} key={index} 
                                    variant="contained" href={frameworkLinks[framework]}>{framework}</Button>
                            ))}
                        </Box>
                        {title && <Typography variant="h4" style={{ textAlign: "center" }}>{title}</Typography>}
                        {description && <Typography variant="body1" style={{ position: 'relative', textAlign: "center", marginLeft: '10%', marginRight: '10%' }}>{description}</Typography>}
                        {links && (
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {links.map((link, index) => (
                            <Link style={{color: "white", textDecoration: "underline", textAlign: "center" }} key={index} 
                            href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.text}
                            </Link>
                            ))}
                        </Box>
                        )}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ProjectComp;