import React from 'react'
import { Card, CardContent, Grid, TextField, Button, Typography } from '@mui/material'

function ContactForm() {
    return (
        <Card sx={{ backgroundColor: '#4E58D7', margin: '16px', padding: '16px', borderRadius: '10px' }}>
            <CardContent>
                <form>
                    <Grid container spacing={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Grid item>
                            <Typography variant="h3" color="white" textAlign="center">Contact Me!</Typography>
                        </Grid>
                        <Grid item>
                            <TextField label="Name" placeholder="Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item>
                            <TextField type="email" label="Email" placeholder="Email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item>
                            <TextField label="Message" placeholder="Message" variant="outlined" multiline rows={6} fullWidth required />
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default ContactForm;