import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

import {getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";

import { useNavigate } from 'react-router-dom';


export default function SignUp()
{
    const nav = useNavigate();

    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const auth = getAuth();
    const sub = async (e) => 
    {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) => 
        {
            const user = userCredential.user;
            console.log(user);
            nav("/loginClient");
            sendEmailVerification(auth.currentUser)
            .then(() =>
            {
                console.log("email de vérification a été envoyé");
            })
            .catch ((error) =>
            {
                console.log(error);
                alert(error);
            })
        })
        .catch((error) =>
        {
            const errorCode = error.code;
            const errorMessage = error.errorMessage;
            console.log(errorCode,errorMessage);
            alert(errorMessage);
        });
    };

    return (
        <Container component = "main" maxWidth="xs">
            <Box
                sx = {{
                    marginTop : 20,
                    display : "flex",
                    flexDirection : "column",
                    alignItems : "center",
                    border : "solid 2px gray",
                    padding : "40px",
                    widht : "400px",
                }}
            >
                <Typography component = "h1" variant = "h5">
                    Sign Up
                </Typography>
                <Box component= "form" onSubmit = {sub} noValidate sx = {{mt : 1}}>
                    <TextField
                        margin = "normal"
                        required
                        fullWidth
                        id="email"
                        label={<EmailIcon />}
                        name="email"
                        autoComplete = "email"
                        autoFocus
                        onChange={({target}) =>
                        {
                            setEmail(target.value)}
                        }
                    />

                    <TextField
                        margin = "normal"
                        required
                        fullWidth
                        id="pwd"
                        label={<PasswordIcon />}
                        type="password"
                        autoComplete = "current-password"
                        onChange={({target}) =>
                        {
                            setPwd(target.value)}
                        }
                    />
                    <Button
                        type="submit"
                        fullWidth
                        color="secondary"
                        variant="contained"
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>

        </Container>
    )

}