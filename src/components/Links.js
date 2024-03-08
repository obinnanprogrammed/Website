import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header from './Header.js';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import InDevelopment from './in-development.js';
import "./in-development.css";

function Links() {
    return (
        <InDevelopment />
    )
}

export default Links;