import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, createTheme, ThemeProvider, Button, Box } from '@mui/material';
const logo = require('../pictures/logo.png');


export default function Header() {
  const navigate = useNavigate();
  const [large, setLarge] = useState<boolean>(window.innerWidth > 1024);
  const [medium, setMedium] = useState<boolean>(window.innerWidth > 760);
  
  const updateSize = () => {
    setLarge(window.innerWidth > 1024);
    setMedium(window.innerWidth > 760);
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => { window.removeEventListener("resize", updateSize); }
  })
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" style={{ backgroundColor: "rgb(0, 0, 55)"}} elevation={0}>
        <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <img src={logo} alt="Obinna Nwakwue logo" style={{ width: '20%', height: '20%' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant={medium ? "h2" : "h5"}>Obinna Nwakwue</Typography>
              <Typography variant={medium ? "h5" : "body2"} style={{ fontStyle: "italic" }}>helping others out since 2005</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="default" style={{ backgroundColor: "rgb(0, 0, 55)" }} elevation={0}>
        <Toolbar sx={{ alignItems: "center"}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <Button variant="contained" sx={{ bgcolor: "#FFAE42", color: "black", boxShadow: '-5px 5px 8px #0000FF', 
              ':hover': { bgcolor: '#000060', color: 'white', boxShadow: '-5px 5px 8px #FFAE42' } }} onClick={() => { navigate("/"); }}>Home</Button>
            <Button variant="contained" sx={{ bgcolor: "#FFAE42", color: "black", boxShadow: '-5px 5px 8px #0000FF', 
              ':hover': { bgcolor: '#000060', color: 'white', boxShadow: '-5px 5px 8px #FFAE42' } }} onClick={() => { navigate("/about"); }}>About</Button>
            <Button variant="contained" sx={{ bgcolor: "#FFAE42", color: "black", boxShadow: '-5px 5px 8px #0000FF', 
              ':hover': { bgcolor: '#000060', color: 'white', boxShadow: '-5px 5px 8px #FFAE42' } }} onClick={() => { navigate("/projects"); }}>Projects</Button>
            <Button variant="contained" sx={{ bgcolor: "#FFAE42", color: "black", boxShadow: '-5px 5px 8px #0000FF', 
              ':hover': { bgcolor: '#000060', color: 'white', boxShadow: '-5px 5px 8px #FFAE42' } }} onClick={() => { navigate("/links"); }}>Links</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

const theme = createTheme({
  typography: {
    fontFamily: "Maven Pro"
  }
});
