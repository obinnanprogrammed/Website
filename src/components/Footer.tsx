export default function Footer() {
    const links = [
        ["icons8-document.svg", "https://drive.google.com/file/d/1Qj2XTxarZvqt0shnhxqD03A0U8AXOzuR/view?usp=sharing"],
        ["iconmonstr-linkedin-4.svg", "https://www.linkedin.com/in/obinwa05"],
        ["icons8-github.svg", "https://www.github.com/obinnanprogrammed"],
        ["email-svgrepo-com.svg", "mailto:obinnanwakwue10@gmail.com"],
        ["icons8-youtube.svg", "https://www.youtube.com/channel/UC68UbNT1KakmlH7I4SrSXhA"],
        ["icons8-instagram.svg", "https://www.instagram.com/obi_wan_awesome20/"]
    ];
    return (
        <>
            <div className="relative bottom-0 w-full p-4 items-center">
                <div className="flex justify-around">
                    <div className="flex justify-center mr-2">
                        <nav className="flex space-x-4 items-center">
                            {
                                links.map(([imgLink, url]) => (
                                    <a key={imgLink} href={url}>
                                        <img src={require(`../pictures/${imgLink}`).default} />
                                    </a>
                                ))
                            }
                        </nav>
                    </div>
                    {<div className="text-sm md:text-base text-white">© 2024 Obinna Nwakwue</div>}
                </div>
            </div>
        </>
    )
}
