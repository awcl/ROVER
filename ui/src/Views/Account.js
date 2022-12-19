import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, Grid, Paper, TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import config from '../config';
import Context from '../components/Context';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const Account = () => {
    let { id } = useParams();
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
    const { session } = useContext(Context);
    console.log('session id', session.id)

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
    const handleMemberUpdate = async (e) => {
        e.preventDefault();
        if (!(/^[0-9]+$/).test(organization)) {
            window.alert(`Your organization entry can only be numeric 🙁`);
        }
        else if (username && password && password === confirmPassword) {
            try {
                const response = await fetch(`${API_URL}/member/updatemember/${session.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ first_name: firstName, last_name: lastName, rank: rank, email: email, username: username, password: password, organization_id: organization })
                });
                if (response.status !== 200) {
                    console.log('Error Saving Account Information')
                } else {
                    console.log('Saved')
                    navigate('/account');
                }
            } catch (e) { console.log(e) }
        }
    }

    return (
        <div className="content">
            <Container maxWidth="sm">
                <Grid container spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ p: 5 }}>
                            <form onSubmit={handleMemberUpdate}>
                                <h1>Account Information</h1>
                                {errorMessage && <div className='failed'>{errorMessage}</div>}
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            defaultValue={session.first_name}
                                            placeholder={session.first_name}
                                            
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            defaultValue={session.last_name}
                                            placeholder={session.last_name}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            defaultValue={session.rank}
                                            placeholder={session.rank}
                                            onChange={(e) => setRank(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            defaultValue={session.organization_id}
                                            placeholder={`${session.organization_id}`}
                                            onChange={(e) => setOrganization(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            defaultValue={session.email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        >{session.email}</TextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            required
                                            variant="outlined"
                                            defaultValue={session.username}
                                            placeholder="Username"
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            value={session.password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
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
                                            onClick={() => navigate('/account')}
                                        >
                                            Save
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

export default Account;