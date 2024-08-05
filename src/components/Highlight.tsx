import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

type HighlightProps = {
    header: string,
    image: string,
    alt: string,
    text: string,
    date: string
}
export default function Highlight({ header, image, alt, text, date }: HighlightProps) {
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