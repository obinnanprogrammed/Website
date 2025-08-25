import Header from './Header';
import Footer from './Footer';
import ProjectComp from './ProjectComp';

const schoolTool = require('../images/school-tool.png').default;
const scalesGalore = require('../images/ScalesGalore-logo.png').default;
const npcroom = require('../images/npcroom.png').default;
const revRewards = require('../images/revrewards.jpg').default;

export default function Projects() {
    const projLinks = {
        schoolTool: [],
        scalesGalore: [
            { url: "https://www.github.com/obinnanprogrammed/ScalesGalore", text: "Github" }
        ],
        npcroom: [
            { url: "https://www.github.com/obinnanprogrammed/NPCRoom", text: "Github" },
            { url: "http://npcroom.vercel.app", text: "Website!"}
        ],
        revRewards: [
            { url: "https://www.github.com/TrexKalp/HowdyHack_", text: "Github" },
            { url: "https://devpost.com/software/revrewards", text: "Devpost"}
        ]
    }

    const projStacks = {
        scalesGalore: ["React Native", "Vexflow", "Express", "Node.js"],
        npcroom: ["React", "MaterialUI", "Spring Boot", "MongoDB"],
        revRewards: ["React", "ChakraUI", "Django", "Tesseract"],
        schoolTool: ["Python", "Google Cloud Platform"]
    }
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center my-3">
                <div className="order-first self-center">
                    <p className="text-xl md:text-4xl lg:text-5xl font-bold mb-2 animate-fadeLeft">projects</p>
                </div>
                <div className="block inline-block min-w-[1em] h-0.5 self-stretch 
                    bg-neutral-100 dark:bg-white/10 self-center"></div>
                
                <div className="lg:grid lg:grid-cols-2 lg:gap-4 flex flex-col items-center space-y-4 mt-6 self-center animate-fadeDown">
                    <ProjectComp image={schoolTool} title="School Tool"
                        description="A command-line tool to help students manage their classes, assignments, exams, and more."
                        links={projLinks.schoolTool} techStack={projStacks.schoolTool} />
                    <ProjectComp image={scalesGalore} title="ScalesGalore!"
                        description="An interactive scale dictionary for beginning musicians. Currently in the works."
                        links={projLinks.scalesGalore} techStack={projStacks.scalesGalore} />
                    <ProjectComp image={npcroom} title="NPCRoom" 
                        description="My flagship Aggie Coding Club Project. Teaches team members
                        full-stack web development with React, Spring Boot, and MongoDB by creating a simple 
                        NPC chat room." links={projLinks.npcroom} techStack={projStacks.npcroom} />
                    <ProjectComp image={revRewards} title="Reveille Rewards" 
                        description="A website where users can scan receipts from small businesses 
                        and earn redeemable tokens. Won Best Small Business Hack at HowdyHack 2023." 
                        links={projLinks.revRewards} techStack={projStacks.revRewards} />
                </div>
            </div>
            <Footer />
         </>
    )
}