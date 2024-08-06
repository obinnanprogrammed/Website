import { AppBar, Toolbar, Typography, createTheme, ThemeProvider, Box } from '@mui/material';

export default function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" style={{ backgroundColor: "rgb(0, 0, 55)"}} elevation={0}>
                <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body2">© 2024 Obinna Nwakwue</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

const theme = createTheme({
    typography: {
        fontFamily: "Maven Pro"
    }
});