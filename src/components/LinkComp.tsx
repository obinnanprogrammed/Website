import { FC } from 'react'
import { Button } from '@mui/material';

interface LinkProps {
  icon: string,
  title: string,
  link: string,
  backgroundcolor?: string
}

const LinkComp: FC<LinkProps> = ({ icon, title, link, backgroundcolor="#4E58D7" }) => {
    return (
        <Button sx={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            padding: '8px',
            margin: '64px',
            bgcolor: '#4E58D7',
            transition: 'width 0.3s, padding 0.3s',
            width: '40px',
            '&:hover': {
              width: '120px',
              padding: '8px 16px',
              bgcolor: backgroundcolor,
              color: 'black'
            },
            '& .MuiSvgIcon-root': {
              transition: 'margin-right 0.3s',
            },
            '& .text': {
              display: 'none',
              marginLeft: '8px',
              transition: 'display 0.3s',
              whiteSpace: 'nowrap',
            },
            '&:hover .text': {
              display: 'inline',
            },
          }} href={link} variant="outlined">
            <img src={icon} />
            <span className="text">{title}</span>
        </Button>
    )
}

export default LinkComp;