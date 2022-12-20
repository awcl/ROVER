import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, Grid, Paper, TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import config from '../config';
import Context from '../components/Context';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const MemberDetails = () => {
    let { id } = useParams();
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rank, setRank] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [admin, setAdmin] = useState('');
    const [van_cert, setVanCert] = useState('');
    const [sedan_cert, setSedanCert] = useState('');
    const [truck_cert, setTruckCert] = useState('');
    const [ton_cert, setTonCert] = useState('');
    const [hmmwv_cert, setHmmwvCert] = useState('');
    const [mobilizer_cert, setMobilizerCert] = useState('');
    const [amrap_cert, setAmrapCert] = useState('');
    const [patrol_cert, setPatrolCert] = useState('');
    const [checked, setChecked] = React.useState([true, false]);


    useEffect(() => {

        fetch(`${API_URL}/member/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setUsername(data[0].username)
                setFirstName(data[0].first_name)
                setLastName(data[0].last_name)
                setRank(data[0].rank)
                setEmail(data[0].email)
                setOrganization(+data[0].organization_id)
                setAdmin(data[0].admin)
                setVanCert(data[0].van_cert)
                setSedanCert(data[0].sedan_cert)
                setTruckCert(data[0].truck_cert)
                setTonCert(data[0].ton_cert)
                setHmmwvCert(data[0].hmmwv_cert)
                setMobilizerCert(data[0].mobilizer_cert)
                setAmrapCert(data[0].amrap_cert)
                setPatrolCert(data[0].patrol_cert)

                console.log(data[0]);
                console.log(rank)
            });
    });

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="Van"
                control={<Checkbox checked={checked[0]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label="Sedan"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
                        <FormControlLabel
                label="Truck"
                control={<Checkbox checked={checked[2]} onChange={handleChange2} />}
            />
                        <FormControlLabel
                label="5-Ton Truck"
                control={<Checkbox checked={checked[3]} onChange={handleChange2} />}
            />
                        <FormControlLabel
                label="HMMWV"
                control={<Checkbox checked={checked[4]} onChange={handleChange2} />}
            />
                        <FormControlLabel
                label="MOBILIZER"
                control={<Checkbox checked={checked[5]} onChange={handleChange2} />}
            />
                        <FormControlLabel
                label="AMRAP"
                control={<Checkbox checked={checked[6]} onChange={handleChange2} />}
            />
                        <FormControlLabel
                label="Patrol Vehicle"
                control={<Checkbox checked={checked[7]} onChange={handleChange2} />}
            />
        </Box>
    );


    // const handleMemberUpdate = async (e) => {
    //     e.preventDefault();
    //     // console.log(firstName, lastName, rank, email, username, password, organization)
    //     console.log(!(/^[0-9]+$/).test(organization))
    //     if (!(/^[0-9]+$/).test(organization)) {
    //         window.alert(`Your organization entry can only be numeric 🙁`);
    // } else if({
    //     // console.log(firstName, lastName, rank, email, username, password, organization)

    //         response = await fetch(`${API_URL}/member/updatemember/${session.id}`, {
    //             method: 'PATCH',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ first_name: firstName, last_name: lastName, rank: rank, email: email, username: username,
    //   organization_id: organization,
    // admin: admin, is_van_cert: van_cert, is_sedan_cert: sedan_cert, is_truck_cert: truck_cert,
    // is_5_Ton_cert: ton_cert, is_AMRAP_cert: amrap_cert, is_HMMWV_cert: hmmwv_cert,
    // is_Mobilizer_cert: mobilizer_cert,  is_Patrol_cert: patrol_cert)
    //         })
    //         if (response.status !== 204) {
    //             console.log(response.status)
    //         } else {
    //             console.log('Saved')
    //             window.alert(`The Member Information Has Been Updated!`);
    //         }
    //      catch (e) { console.log(e) }
    //     })
    // }

    return (
        <div className="content">
            <Container maxWidth="sm">
                <Grid container spacing={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >

                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ p: 5 }}>
                            <form
                            //onSubmit={handleMemberUpdate}
                            >
                                <h1>Member Information</h1>
                                {errorMessage && <div className='failed'>{errorMessage}</div>}
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            defaultValue={firstName}
                                            placeholder={firstName}
                                            onBlur={(e) => setFirstName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            defaultValue={lastName}
                                            placeholder={lastName}
                                            onBlur={(e) => setLastName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            defaultValue={rank}
                                            placeholder={rank}
                                            onBlur={(e) => setRank(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            defaultValue={organization}
                                            placeholder={organization}
                                            onBlur={(e) => setOrganization(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            defaultValue={email}
                                            placeholder={email}
                                            onBlur={(e) => setEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div>
                                        Certifications
                                        </div>
                                        <FormControlLabel
                                            label="Certified on All Vehicle Types"
                                            control={
                                                <Checkbox
                                                    checked={checked[0] && checked[1]}
                                                    indeterminate={checked[0] !== checked[1]}
                                                    onChange={handleChange1}
                                                />
                                            }
                                        />
                                        {children}
                                    </Grid>





                                    <Grid item xs={12}>
                                        <Button
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                            onClick={() => navigate('/ManageUsers')}
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