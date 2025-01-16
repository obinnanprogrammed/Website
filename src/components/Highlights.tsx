import Header from './Header';
import Footer from './Footer';
import Highlight from './Highlight';
import MobileHighlight from './MobileHighlight';

const niantic = require('../pictures/niantic.jpg').default;
const nianticMobile = require('../pictures/niantic-mobile.jpg').default;
const npcroom = require('../pictures/npcroom.png').default;
const npcroomMobile = require('../pictures/NPC_wojak_meme.png').default;
const tutor = require('../pictures/tutoring.jpg').default;
const tutoringMobile = require('../pictures/tutoring-mobile.jpg').default;
const linkedList = require('../pictures/linked-list.jpg').default;
const linkedListMobile = require('../pictures/linked-list-mobile.jpg').default;

export default function Highlights() {
    const highlights = [
        {
            header: "The Newest Teaching Assistant",
            image: linkedList,
            mobileImage: linkedListMobile,
            alt: "A linked list, a type of data structure",
            text: "I began my role as a TA for the data structures and algorithms class (CSCE 221) at Texas A&M! I conduct labs where students reinforce lecture concepts and work on their assignments. I've always wanted to TA for a computer science course and this is an exciting opportunity for me to do so!",
            date: "13 January 2025"
        },
        {
            header: "Niantic Internship!",
            image: niantic,
            mobileImage: nianticMobile,
            alt: "Niantic logo",
            text: "I accepted an offer to join Niantic as a Software Engineering Intern for the summer of 2025! I'm very excited to see what I'll work on!",
            date: "12 December 2024"
        },
        {
            header: "NPCRoom, Season 3",
            image: npcroom,
            mobileImage: npcroomMobile,
            alt: "NPCRoom UI",
            text: "I completed the third iteration of my flagship Aggie Coding Club project, NPCRoom. It teaches students about full stack web development through the creation of an NPC chat room. The project won ACC's Best Learning-Focused Project!",
            date: "25 November 2024"
        },
        {
            header: "A Tutor and a Peer Teacher",
            image: tutor,
            mobileImage: tutoringMobile,
            alt: "Stock image of someone getting tutored",
            text: "I began my roles as a tutor for Texas A&M's Math Learning Center (MLC) and a peer teacher for the school's introductory engineering class. As an MLC tutor, I get to help students in calculus 3, and as a peer teacher, I get to help students learn fundamental programming and engineering principles with Python.",
            date: "23 August 2024"
        }
    ];
    return (
        <>
            <Header/>
            <div className="flex flex-col lg:flex-row justify-center my-3">
                <div className="lg:mr-6 self-center lg:self-start">
                    <p className="text-xl md:text-4xl lg:text-5xl font-bold animate-fadeLeft">highlights</p>
                    <p className="lg:hidden text-xs italic mb-2 animate-fadeLeft">Tap/click to see description!</p>
                </div>
                <div className="block lg:hidden inline-block min-w-[1em] h-0.5 self-stretch 
                    bg-neutral-100 dark:bg-white/10 self-center"></div>
                <div className="hidden lg:block inline-block min-h-[1em] w-0.5 self-stretch 
                    bg-neutral-100 dark:bg-white/10 self-center"></div>
                <div className="block lg:hidden mt-6 space-y-4 self-center animate-fadeUp">
                    {
                        highlights.map(({header, image, mobileImage, alt, text, date}) => (
                            <MobileHighlight key={header} header={header} image={mobileImage} alt={alt} text={text} date={date} />
                        ))
                    }
                </div>
                <div className="hidden lg:block ml-6 space-y-2 self-center animate-fadeRight">
                    {
                        highlights.map(({header, image, mobileImage, alt, text, date}) => (
                            <Highlight header={header} image={image} alt={alt} text={text} date={date} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}