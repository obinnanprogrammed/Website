type HighlightProps = {
    header: string,
    text: string,
    date: string
}

export default function Highlight({ header, text, date }: HighlightProps) {
    return (
        <div className="flex items-start bg-columbia rounded-lg p-4">
            <div className="text-left text-black">
                <p className="italic">{date}</p>
                {header && <p className="text-xl font-bold">{header}</p>}
                <p className="max-w-prose">{text}</p>
            </div>
        </div>
    )
}