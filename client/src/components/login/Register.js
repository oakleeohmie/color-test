import React, { Component } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Register.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const SignUp = () => {
    const classes = useStyles();
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const handleInputChange = event => {
        setFirstName(event.target.firstName.value);
        setLastName(event.target.lastName.value);
        setPassword(event.target.password.value);
        setEmail(event.target.email.value);
    }
    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log(firstName, lastName, password, email);
        if (firstName || lastName || email) {
            alert('Please fill out the information')
        }
        if (password.length < 8) {
            alert('Password is too weak!')
        }
        await axios.post('/api/signup', { firstName, lastName, password, email }).then(result => {
            console.log(result);
            setFirstName('');
            setLastName('');
            setPassword('');
            setEmail('');
            window.location.href = '/'
        })
    }
    return (
        <Container className="register" component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <h1 className="registerTitle" component="h1" variant="h5">
                    Sign up
          </h1>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                    <Button onClick={e => { e.preventDefault(); window.location.href = '/' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        Sign Up
            </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2" style={{ color: 'black' }} >
                                Already have an account? Sign in
                </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container >
    );
}
export default SignUp;