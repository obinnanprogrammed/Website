import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import proPic from '../pictures/FullSizeR.jpg';
import howdyHack2 from '../pictures/howdyhack2.jpg';
import tamuHack from '../pictures/tamuhack.jpg';

function Item({ image, altText }) {
    return (
        <Paper>
            <img src={image} alt={altText} style={{ width: '100%', height: 'auto' }} />
        </Paper>
    )
}

function ImageCarousel() {
    const items = [
        {
            img: proPic,
            alt: "Professional picture of Obinna Nwakwue"
        },
        {
            img: howdyHack2,
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

export default ImageCarousel;