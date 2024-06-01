import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface HighlightProps {
    header: string,
    image: string,
    alt: string,
    text: string,
    date: string
}
const Highlight: FC<HighlightProps> = ({ header, image, alt, text, date }) => {
    return (
        <Box ml={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px' }}>
            {image && <img src={image} alt={alt} style={{ width: '25%', height: '15%' }} />}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body1" style={{ fontStyle: "italic" }}>{date}</Typography>
                {header && <Typography variant="h5">{header}</Typography>}
                <Typography variant="body1">{text}</Typography>
            </Box>
        </Box>
    )
}

export default Highlight;