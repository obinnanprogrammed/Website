import Header from './Header';
import Footer from './Footer';
import ImageCarousel from './ImageCarousel';

export default function About() {
    // TODO: Retool, accordions somewhere....
    return (
        <>
            <Header />
            <div className="my-3 md:my-12">
                <h1 className="text-right text-xl md:text-4xl lg:text-5xl font-bold animate-fadeRight">About me!</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-top">
                <div className="max-w-prose space-y-3 self-center lg:text-left animate-fadeDown lg:animate-fadeRight">
                    <p>I am a junior Computer Science student at Texas A&M University. I am primarily interested
                        in the use of software engineering in music technology and education.
                    </p>
                    <p>In Summer 2025, I interned with Niantic as a Software Engineering Intern.</p>
                    <p>Currently, I'm involved in...</p>
                    <ul className="list-disc list-inside">
                        <li>Aggie Coding Club
                            <ul className="list-disc list-inside">
                                <li className="ml-6">...as a project manager (2023-2025)</li>
                                <li className="ml-6">...as a Workshops Officer (2025-present)</li>
                            </ul>
                        </li>
                        <li>Aggie Competitive Programming Club</li>
                        <li>Texas A&M University Trombone Choir</li>
                    </ul>
                
                    <p>I love teaching and helping others out! My teaching posts include...</p>
                    <ul className="list-disc list-inside">
                        <li>Peer Teacher, ENGR 102: Engineering Lab 1 - Computation (2024)</li>
                        <li>Undergraduate TA, CSCE 221: Data Structures and Algorithms (2025-present)</li>
                        <li>TAMU Math Learning Center Help Session Tutor, MATH 251: Engineering Mathematics III (2024-present)</li>
                    </ul>
                    <p>Outside of computer science, I enjoy music and Pokémon. I am a composer and arranger, and I play trombone.</p>
                    <p>Find me on <a className="underline" href="https://www.instagram.com/obi_wan_awesome20">Instagram</a> or 
                        on <a className="underline" href="https://www.youtube.com/channel/UC68UbNT1KakmlH7I4SrSXhA">Youtube</a>!</p>
                </div>
                <div className="size-7/12 md:size-1/2 mt-4 md:mt-0 md:ml-8 mb-4 md:mb-0 self-center order-first lg:order-last animate-fadeUp lg:animate-fadeLeft">
                    <ImageCarousel />
                </div>
            </div>
            <Footer />
        </>
        
    )
}