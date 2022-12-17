import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Container,
    Button,
    Grid,
    Paper,
    TextField,
    IconButton,
    InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Context from '../components/Context';
import { useContext } from 'react';
import config from '../config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');
    const { session, setSession } = useContext(Context);

    useEffect(() => {
        document.cookie.split('=')[0] === 'ROVERid' && navigate('/Home')
      }, [])
    // const formReset = () => {
    //     setUsername('');
    //     setPassword('');
    // }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            window.alert('bro you left some stuff blank')
        } else if (username && password) {
            await fetch(`${API_URL}/member/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password })
                // , credentials: 'include'
            }).then(res => res.json())
                .then(data => {
                    if (data.admin && data.username) {
                        console.log('SUCCESS 🥳')
                        setSession(data)
                        console.log(data)
                        document.cookie = `ROVERid=${data.id}; Path=/;`
                        navigate('/Home')
                    } else {
                        console.log('Connectivity Issues 🤬')
                        setSession({})
                    }
                })
                .catch(err => {
                    console.log('Wrong 🤬')
                    setSession({})
                });
        }
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Grid container spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ padding: 5 }}>
                            <form onSubmit={handleSubmit}>
                                <h1>Log In</h1>
                                <TextField
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="username"
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="password"
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button
                                    disabled={!username || !password}

                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    margin="normal"
                                    type="submit"
                                >
                                    Log In
                                </Button>
                                <Button
                                    onClick={() => navigate('/register')}
                                    variant="contained"
                                    color="secondary"
                                    fullWidth
                                    margin="normal"
                                >
                                    Don't have an account? Register
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default LoginPage;