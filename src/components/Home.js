import React from 'react';
import Typography from '@mui/material/Typography';
import Header from './Header.js';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import "./in-development.css";
import InDevelopment from './in-development.js';

function Home() {
    return (
        <>
            <Header />
            <InDevelopment />
        </>
    )
}

export default Home;