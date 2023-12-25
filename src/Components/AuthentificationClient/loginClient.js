import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../fireConfig";

import { Link, useNavigate } from "react-router-dom";

const LoginClient = () =>
{
    const nav = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(`submitted email : ${email} password : ${password}`);
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential =>
            {
                const user = userCredential.user;
                console.log(user.email);
                nav("/");
            }))
        .catch((error) =>
        {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorMessage);
        });
    }

    const forgotPass = () =>
    {
        if(email)
        {
            sendPasswordResetEmail(auth, email)
            .then(() =>
            {
                alert("email de réinitialisation de mot de passe a été envoyé");
                console.log("email de réinitialisation de mot de passe a été envoyé");
            })
            .catch((error) =>
            {
                console.log(error);
            })
        }
        else
            alert("veuillez saisir votre email");  
    }

    return (
        <Container component = "main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border:"solid 2px gray",
                    padding:"40px",
                    width: "470px",
                }}
            >
                <Typography component = "h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sw ={{mt : 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label = {<EmailIcon />}
                        name = "email"
                        autoComplete="email"
                        onChange={({target})=> setEmail(target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={ <PasswordIcon />}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={({ target}) => 
                        setPassword(target.value)}            
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={(event)=>handleSubmit(event)}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link onClick={() => forgotPass()}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
};

export default LoginClient;