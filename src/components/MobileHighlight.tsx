

import { useState } from 'react';
type HighlightProps = {
    header: string,
    text: string,
    date: string
}

export default function MobileHighlight({ header, text, date }: HighlightProps) {
    const [topVisible, setTopVisible] = useState(true);

    
    return (
        <div className="mb-4">
            {topVisible && 
            (<div onClick={() => setTopVisible(false)} className="flex items-start bg-columbia rounded-lg p-4 hover:shadow-lg 
                hover:shadow-[#D9D9D9]">
                <div className="text-left text-black">   
                    <p>{date}</p>
                    <h2 className="text-lg font-bold">{header}</h2>
                </div>
            </div>)}
            {!topVisible && (<div onClick={() => setTopVisible(true)} className="bg-black rounded-lg p-4 hover:shadow-lg 
                hover:shadow-[#D9D9D9] max-w-prose">
                {text}
            </div>)}
        </div>
    )
}