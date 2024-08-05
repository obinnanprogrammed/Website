/**
 * Add background to each highlight and matte/elevate it
 */
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
        <Box ml={2} sx={{ display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', 
            bgcolor: "#000060", padding: '8px', gap: '8px', borderRadius: '8px', boxShadow: 10 }}>
            {image && <img src={image} alt={alt} style={{ width: '25%', height: '15%' }} />}
            <Box sx={{ display: 'inline-flex', flexDirection: 'column' }}>
                <Typography variant="body1" style={{ fontStyle: "italic" }}>{date}</Typography>
                {header && <Typography variant="h5">{header}</Typography>}
                <Typography variant="body1">{text}</Typography>
            </Box>
        </Box>
    )
}