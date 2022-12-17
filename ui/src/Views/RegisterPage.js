import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Button, Grid, Paper, TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import config from '../config';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rank, setRank] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const formReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setRank('');
        setOrganization('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        if (username && password && password === confirmPassword) {
            try {
                const response = await fetch(`${API_URL}/member/new`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ first_name: firstName, last_name: lastName,rank: rank, email: email, username: username, password: password, organization_id: organization })
                });
                if (response.status !== 201) {
                    console.log('Error creating account')
                } else {
                    console.log('Created')
                    navigate('/login');
                }
            } catch (e) {console.log(e)}
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
                        <Paper elevation={3} sx={{ p: 5 }}>
                            <form onSubmit={handleRegister}>
                                <h1>Register</h1>
                                {errorMessage && <div className='failed'>{errorMessage}</div>}
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            variant="outlined"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            variant="outlined"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Rank"
                                            variant="outlined"
                                            value={rank}
                                            onChange={(e) => setRank(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Organization"
                                            variant="outlined"
                                            value={organization}
                                            onChange={(e) => setOrganization(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            variant="outlined"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Username"
                                            variant="outlined"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
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
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="confirm password"
                                            label="Confirm Password"
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
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            type="submit"
                                            disabled={!username || !password || password !== confirmPassword}
                                        >
                                            Register
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            onClick={() => navigate('/login')}
                                        >
                                            Have an account? Log in
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default RegisterPage;