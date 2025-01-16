type HighlightProps = {
    header: string,
    image: string,
    alt: string,
    text: string,
    date: string
}
export default function Highlight({ header, image, alt, text, date }: HighlightProps) {
    return (
        <div className="flex items-start bg-columbia rounded-lg p-4">
            {image && <img src={image} alt={alt} className="object-size-down max-w-md mr-2 rounded-lg"></img>}
            <div className="text-left text-black">
                <p className="italic">{date}</p>
                {header && <p className="text-xl font-bold">{header}</p>}
                <p className="max-w-prose">{text}</p>
            </div>
        </div>
    )
}