import { FC } from 'react';
import { Card, CardContent, Grid, TextField, Button, Typography } from '@mui/material'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface ContactProps {}

const ContactForm: FC<ContactProps> = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const serviceId = `${process.env.VITE_EMAIL_SERVICE_KEY}`;
        const templateId = `${process.env.VITE_EMAIL_TEMPLATE_KEY}`;
        const publicKey = `${process.env.VITE_EMAIL_PUBLIC_KEY}`;

        emailjs.send(serviceId, templateId, {
            sender_name: name,
            sender_email: email,
            message: message
        }, publicKey).then(
            () => {
                alert("Message successfully sent!");
            },
            (error) => {
                alert("Error detected: " + error);
            }
        )
    }
    return (
        <Card sx={{ backgroundColor: '#4E58D7', margin: '16px', padding: '16px', borderRadius: '10px' }}>
            <CardContent>
                <form onSubmit={submitEmail}>
                    <Grid container spacing={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Grid item>
                            <Typography variant="h3" color="white" textAlign="center">Contact Me!</Typography>
                        </Grid>
                        <Grid item>
                            <TextField label="Name" placeholder="Name" variant="outlined" fullWidth required onChange={(e) => setName(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField type="email" label="Email" placeholder="Email" variant="outlined" fullWidth required  onChange={(e) => setEmail(e.target.value)} />
                        </Grid>
                        <Grid item>
                            <TextField label="Message" placeholder="Message" variant="outlined" multiline rows={6} fullWidth required  onChange={(e) => setMessage(e.target.value)} />
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