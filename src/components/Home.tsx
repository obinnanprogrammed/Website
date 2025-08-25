import Header from './Header';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <Header />
            <div className="my-3 lg:my-12">
                <h1 className="text-left text-xl md:text-4xl lg:text-5xl font-bold animate-fadeLeft">Welcome, you awesome person!</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-top">
                <div className="size-7/12 md:size-1/2 mt-4 lg:mt-0 lg:mr-8 mb-4 lg:mb-0 self-center animate-fadeUp lg:animate-fadeLeft">
                    <img src={require("../images/redwoods-state-park.jpg").default}
                        alt="Obinna Nwakwue at Redwoods State Park in Felton, CA" />
                </div>
                <div className="self-center lg:self-start text-left max-w-prose space-y-3">
                    <h1 className="text-xl md:text-3xl font-bold animate-fadeDown lg:animate-fadeRight">My name is Obinna...</h1>
                    <p className="animate-fadeDown lg:animate-fadeRight">...and I am an aspiring software engineer. 
                        My specialties include full-stack development, app development, music technology, and education.</p>
                    <ul>
                        <li className="opacity-0 animate-fadeDown [animation-delay:75ms] lg:animate-fadeRight-75">Want to see my accomplishments? Click Highlights.</li>
                        <li className="opacity-0 animate-fadeDown [animation-delay:150ms] lg:animate-fadeRight-150">Want to see more about me? Click About.</li>
                        <li className="opacity-0 animate-fadeDown [animation-delay:225ms] lg:animate-fadeRight-225">Want to see my projects? Click Projects.</li>
                        <li className="opacity-0 animate-fadeDown [animation-delay:300ms] lg:animate-fadeRight-300">Want to contact me? Click any of the icons below 
                            or email me at <a href="mailto:obinnanwakwue10@gmail.com">obinnanwakwue10@gmail.com</a>.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}