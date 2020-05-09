import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import './Login.css';

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
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const classes = useStyles();
    const [name, setName] = React.useState('')
    const [value, setValue] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')
    const handleInputchange = event => {
        event.preventDefault();
        setValue(event.target.value);
        setName(event.target.name);
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log(name, value)

        await axios.post('/api/login', { name, value }).then(result => {
            console.log(result);
            setName(`${result.data.firstName} ${result.data.lastName}`);
            setPassword(`${result.data.password}`)
            setEmail(`${result.data.password}`)
            window.location.href = '/welcome'
        })
    }


    return (
        <div>
            <Container className="signIn" component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <h1 className="signInTitle" component="h1" variant="h5">
                        Sign in
                </h1>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button onClick={e => { e.preventDefault(); window.location.href = '/welcome' }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color=""
                            className={classes.submit}
                        >
                            Sign In
                    </Button>
                        <Grid container>
                            <Grid item xs>

                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2" style={{ color: 'black' }}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form >
                </div >
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container >
        </div>
    );
}

export default Login;
