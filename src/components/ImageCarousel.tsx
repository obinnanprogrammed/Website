import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
const proPic = require('../images/pro-pic.jpg');
const tamuHack = require('../images/tamuhack.jpg');
const accPic = require('../images/acc-presentation.jpg');
const internshipPic = require('../images/niantic-pic.jpg');

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

// TODO: redo this, use Flowbite or something similar (Material Tailwind?? Looks a little simpler, but can we control interval?)
export default function ImageCarousel() {
    const items = [
        {
            img: proPic,
            alt: "Professional picture of Obinna Nwakwue"
        },
        {
            img: accPic,
            alt: "Obinna Nwakwue introduces his Aggie Coding Club project at a meeting"
        },
        {
            img: tamuHack,
            alt: "Obinna Nwakwue and his TAMUhack X team"
        },
        {
            img: internshipPic,
            alt: "Obinna Nwakwue at the Niantic office in Sunnyvale, CA"
        }
    ]
    return (
        <Carousel>
            {items.map((item, i) => <Item key={i} image={item.img} altText={item.alt} />)}
        </Carousel>
    )
}