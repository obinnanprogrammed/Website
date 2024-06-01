import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, Grid, Button, Box } from '@mui/material';
const proPic = require('../pictures/FullSizeR.jpg');
const howdyHack = require('../pictures/DSCF1734 (1).JPG');

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
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
      <AppBar position="static" style={{ backgroundColor: "#0E4FF6"}} elevation={0}>
        <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item>
              <div>
                <Typography variant="h2">Obinna Nwakwue</Typography>
                <Typography variant="h6" style={{ fontStyle: "italic" }}>helping others out since 2005</Typography>
              </div>
            </Grid>
            <Grid item>
              <div>
                {large && <img src={proPic} alt="Obinna Nwakwue" style={{width: '260px', height: '168px'}}/>}
                {medium && <img src={howdyHack} alt="Obinna Nwakwue at HowdyHack 2023" style={{width: (window.innerWidth > 760 && window.innerWidth < 1024 ? '210px' : '260px'), height: '168px'}} />}
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="default" style={{ backgroundColor: "#0E4FF6" }} elevation={0}>
        <Toolbar sx={{ alignItems: "center"}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <Button color="inherit" variant="outlined" sx={{ ':hover': { bgcolor: '#F5F5DC', color: 'black' } }} onClick={() => { navigate("/"); }}>Home</Button>
            <Button color="inherit" variant="outlined" sx={{ ':hover': { bgcolor: '#F5F5DC', color: 'black' } }} onClick={() => { navigate("/about"); }}>About</Button>
            <Button color="inherit" variant="outlined" sx={{ ':hover': { bgcolor: '#F5F5DC', color: 'black' } }} onClick={() => { navigate("/projects"); }}>Projects</Button>
            <Button color="inherit" variant="outlined" sx={{ ':hover': { bgcolor: '#F5F5DC', color: 'black' } }} onClick={() => { navigate("/links"); }}>Links</Button>
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

export default Header;