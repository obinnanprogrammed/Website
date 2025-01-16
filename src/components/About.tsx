import Header from './Header';
import Footer from './Footer';
import ImageCarousel from './ImageCarousel';

export default function About() {
    return (
        <>
            <Header />
            <div className="my-3 md:my-12">
                <h1 className="text-right text-xl md:text-4xl lg:text-5xl font-bold animate-fadeRight">About me!</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-top">
                <div className="max-w-prose space-y-3 self-center lg:text-left animate-fadeDown lg:animate-fadeRight">
                    <p>I am a sophomore computer science student at Texas A&M University. My primary interests are the 
                        use of software development in music technology and education.</p>
                    <p>At Texas A&M, I am most involved in Aggie Coding Club, where I have served as a project manager
                        for three semesters. My project, NPCRoom, teaches students about full-stack web development through
                        the creation of an NPC chat room. The project won ACC's Best Learning-Focused Project for Fall 2024.</p>
                    <p>Other organizations I am a part of include Aggie Competitive Programming Club, Texas A&M Computing Society 
                        (Texas A&M's student chapter of the Assocation for Computing Machinery), and the National Society of Black Engineers.</p>
                    <p>I love helping other people out, as is evident through the several software-based projects I have worked on (click Projects for more information)
                        as well as my teaching-related positions. I was a peer teacher for the Engineering Computation Lab
                        course (ENGR 102) at Texas A&M and will be a TA for the data structures course (CSCE 221)
                        in Spring 2025. I also work as a Help Session Tutor for calculus 3 (MATH 251) for Texas A&M's Math Learning Center.
                    </p>
                    <p>Outside of computer science, I enjoy music and Pokémon. I am a member of the Texas A&M University Trombone Choir and
                        compose in my free time.
                    </p>
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