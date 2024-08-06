import { Box, Typography, Link, Button, Card, CardContent } from '@mui/material'

type ProjectProps = {
    image: string,
    title: string,
    description: string,
    links: Record<string, string>[],
    techStack: string[]
}

export default function ProjectComp({ image, title, description, links, techStack }: ProjectProps) {
    const frameworkLinks: Record<string, string> = {
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
        "Tesseract": "https://nanonets.com/blog/ocr-with-tesseract/",
        "Node.js": "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        "Express": "https://expressjs.com/en/starter/installing.html"
    }
    return (
        <Card sx={{ backgroundColor: '#000060', margin: '16px', padding: '16px', borderRadius: '10px', boxShadow: "-10px 10px 15px #0000FF" }}>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '16px' }}>
                    {image && <img src={image} alt={title} style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: '80%', height: '200px', borderRadius: '10%' }} />}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '5%' }}>
                            {techStack.map((framework, index) => (
                                <Button sx={{ bgcolor: "#FFAE42", color: "black", display: "flex", justifyContent: "center", 
                                    textAlign: "center", whiteSpace: "normal", wordWrap: "break-word", margin: '4px' }} key={index} 
                                    variant="contained" href={frameworkLinks[framework]}>{framework}</Button>
                            ))}
                        </Box>
                        {title && <Typography variant="h4" style={{ textAlign: "center", color: "white" }}>{title}</Typography>}
                        {description && <Typography variant="body1" style={{ position: 'relative', textAlign: "center", marginLeft: '10%', marginRight: '10%', color: "white" }}>{description}</Typography>}
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
