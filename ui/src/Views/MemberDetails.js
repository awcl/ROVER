import React, { useContext, useEffect, useParams } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Button, Grid, Paper, TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import config from '../config';
import Context from '../components/Context';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const MemberDetails = () => {
    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rank, setRank] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    useEffect(()=>{
        setUsername(id.username)
        setFirstName(id.first_name)
        setLastName(id.last_name)
        setRank(id.rank)
        setEmail(id.email)
        setOrganization(+id.organization_id)
    },[id])


const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
};
const handleMemberUpdate = async (e) => {
    e.preventDefault();
    // console.log(firstName, lastName, rank, email, username, password, organization)
    console.log(!(/^[0-9]+$/).test(organization))
    if (!(/^[0-9]+$/).test(organization)) {
        window.alert(`Your organization entry can only be numeric 🙁`);
    } else if({
        // console.log(firstName, lastName, rank, email, username, password, organization)
        try {
            const response = await fetch(`${API_URL}/member/updatemember/${session.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ first_name: firstName, last_name: lastName, rank: rank, email: email, username: username, organization_id: organization })
            });
            if (response.status !== 204) {
                console.log(response.status)
            } else {
                console.log('Saved')
                window.alert(`The Member Information Has Been Updated!`);
            }
        } catch (e) { console.log(e) }
    })
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

                                        onBlur={(e) => setFirstName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        defaultValue={session.last_name}
                                        placeholder={session.last_name}
                                        onBlur={(e) => setLastName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        defaultValue={session.rank}
                                        placeholder={session.rank}
                                        onBlur={(e) => setRank(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        defaultValue={session.organization_id}
                                        placeholder={`${session.organization_id}`}
                                        onBlur={(e) => setOrganization(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        defaultValue={session.email}
                                        onBlur={(e) => setEmail(e.target.value)}
                                    >{session.email}</TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        required
                                        variant="outlined"
                                        defaultValue={session.username}
                                        placeholder="Username"
                                        onBlur={(e) => setUsername(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        onClick={() => navigate('/account')}
                                    // disabled={!username || !password || password !== confirmPassword}
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

export default MemberDetails;