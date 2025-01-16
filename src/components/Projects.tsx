import Header from './Header';
import Footer from './Footer';
import ProjectComp from './ProjectComp';

const scalesGalore = require('../pictures/ScalesGalore-logo.png');
const swipeTern = require('../pictures/swipetern.png');
const npcroom = require('../pictures/npcroom.png');
const revRewards = require('../pictures/revrewards.jpg');

export default function Projects() {
    const projLinks = {
        scalesGalore: [
            { url: "https://www.github.com/obinnanprogrammed/ScalesGalore", text: "Github" }
        ],
        swipeTern: [
            { url: "https://www.github.com/obinnanprogrammed/tamuhack2024", text: "Github"},
            { url: "https://devpost.com/software/lalala-kzb9fw", text: "Devpost" }
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
        scalesGalore: [ "React Native", "Vexflow", "Express", "Node.js" ],
        swipeTern: [ "React Native", "Firebase", "Expo" ],
        npcroom: [ "React", "MaterialUI", "Spring Boot", "MongoDB" ],
        revRewards: [ "React", "ChakraUI", "Django", "Tesseract" ]
    }
    return (
        <>
            <Header />
            <div className="flex flex-col lg:flex-row justify-center my-3">
                <div className="lg:ml-6 order-first lg:order-last self-center lg:self-start">
                    <p className="text-xl md:text-4xl lg:text-5xl font-bold mb-2 lg:mb-0 animate-fadeLeft lg:animate-fadeRight">projects</p>
                </div>
                <div className="block lg:hidden inline-block min-w-[1em] h-0.5 self-stretch 
                    bg-neutral-100 dark:bg-white/10 self-center"></div>
                
                <div className="flex flex-col items-center space-y-4 mt-6 lg:mr-6 self-center animate-fadeDown lg:animate-fadeLeft">
                    <ProjectComp image={scalesGalore} title="ScalesGalore!"
                        description="An interactive scale dictionary for beginning musicians. Currently in the works."
                        links={projLinks.scalesGalore} techStack={projStacks.scalesGalore} />
                    <ProjectComp image={swipeTern} title="SwipeTern" 
                        description="An app that eases communication between students and internship recruiters. 
                        Demonstrated at TAMUhack X." links={projLinks.swipeTern} techStack={projStacks.swipeTern} />
                    <ProjectComp image={npcroom} title="NPCRoom" 
                        description="My flagship Aggie Coding Club Project. Teaches team members
                        full-stack web development with React, Spring Boot, and MongoDB by creating a simple 
                        NPC chat room." links={projLinks.npcroom} techStack={projStacks.npcroom} />
                    <ProjectComp image={revRewards} title="Reveille Rewards" 
                        description="A website where users can scan receipts from small businesses 
                        and earn redeemable tokens. Won Best Small Business Hack at HowdyHack 2023." 
                        links={projLinks.revRewards} techStack={projStacks.revRewards} />
                </div>
                <div className="hidden lg:block inline-block min-h-[1em] w-0.5 self-stretch 
                    bg-neutral-100 dark:bg-white/10 self-center"></div>
            </div>
            <Footer />
         </>
    )
}