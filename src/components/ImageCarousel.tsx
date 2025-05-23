import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
const proPic = require('../pictures/IMG_8972 (1) (2).jpg');
const howdyHack = require('../pictures/howdyhack.jpg');
const tamuHack = require('../pictures/tamuhack.jpg');

type ItemProps = {
    image: string,
    altText: string
}

function Item({ image, altText }: ItemProps) {
    return (
        <Paper>
            <img src={image} alt={altText} className="w-auto" />
        </Paper>
    )
}

export default function ImageCarousel() {
    const items = [
        {
            img: proPic,
            alt: "Professional picture of Obinna Nwakwue"
        },
        {
            img: howdyHack,
            alt: "Obinna Nwakwue at HowdyHack 2023"
        },
        {
            img: tamuHack,
            alt: "Obinna Nwakwue and his TAMUhack X team"
        }
    ]
    return (
        <Carousel>
            {items.map((item, i) => <Item key={i} image={item.img} altText={item.alt} />)}
        </Carousel>
    )
}