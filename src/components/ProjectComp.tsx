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
        "Python": "https://www.python.org/about/gettingstarted/",
        "Django": "https://docs.djangoproject.com/en/4.2/intro/tutorial01/",
        "Java": "https://www.codecademy.com/learn/learn-java",
        "Spring Boot": "https://spring.io/guides/gs/spring-boot",
        "MongoDB": "https://www.mongodb.com/docs/manual/tutorial/getting-started/",
        "Vexflow": "https://github.com/0xfe/vexflow/wiki/Tutorial",
        "Tesseract": "https://nanonets.com/blog/ocr-with-tesseract/",
        "Node.js": "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        "Express": "https://expressjs.com/en/starter/installing.html",
        "Google Cloud Platform": "https://cloud.google.com/docs",
    }
    return (
        <div className="flex flex-col items-center bg-columbia rounded-lg max-w-xs md:max-w-prose p-4">
            <img src={image} alt={title} className="object-size-down max-w-40 rounded-lg mt-2" />
            <div className="flex justify-center items-center space-x-2 md:space-x-5 my-4 max-w-full">
                {
                    techStack.map((framework, index) => (
                        <a href={frameworkLinks[framework]} key={index}>
                            <button className="bg-black text-xs md:text-base md:size-auto 
                                text-white text-wrap p-3 rounded-lg">{framework}</button>
                        </a>
                    ))
                }
            </div>
            <p className="font-bold italic text-2xl text-black">{title}</p>
            <p className="text-black">{description}</p>
            {
                links.map((link, index) => (
                    <a href={link.url} key={index} className="text-black underline">{link.text}</a>
                ))
            }
        </div>
    )
}
