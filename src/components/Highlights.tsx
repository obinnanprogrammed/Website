import Header from './Header';
import Footer from './Footer';
import Highlight from './Highlight';
import MobileHighlight from './MobileHighlight';
import highlights from './highlightsList';

export default function Highlights() {
    // TODO: make highlights a carousel
    return (
        <>
            <Header/>
            <div className="flex flex-col lg:flex-row justify-center my-3">
                <div className="lg:mr-6 self-center lg:self-start">
                    <p className="text-xl md:text-4xl lg:text-5xl font-bold animate-fadeLeft ">highlights</p>
                    <p className="lg:hidden text-xs italic mb-2 animate-fadeLeft">Tap/click to see description!</p>
                </div>
                <div className="block lg:hidden inline-block min-w-[1em] h-0.5 self-stretch 
                    bg-neutral-100 dark:bg-white/10 self-center"></div>
                <div className="hidden lg:block inline-block min-h-[1em] w-0.5 self-stretch 
                    bg-neutral-100 dark:bg-white/10 self-center"></div>
                <div className="block lg:hidden mt-6 space-y-4 self-center animate-fadeUp">
                    {
                        highlights.map(({header, text, date}) => (
                            <MobileHighlight key={header} header={header} text={text} date={date} />
                        ))
                    }
                </div>
                <div id="scroll-please" className="hidden lg:block ml-6 space-y-2 self-center animate-fadeRight overflow-y-auto max-h-[calc(100vh-8rem)]">
                    {
                        highlights.map(({header, text, date}) => (
                            <Highlight header={header} text={text} date={date} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}