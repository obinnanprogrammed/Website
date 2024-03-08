import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./in-development.css";
function Header() {
  return (
    <AppBar position="static" class="header">
      <Toolbar>
        <Typography variant="h6">Obinna Nwakwue</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
