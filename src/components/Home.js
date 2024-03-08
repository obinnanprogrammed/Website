import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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