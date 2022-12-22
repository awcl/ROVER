import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, Grid, Paper, TextField } from "@mui/material";
import config from '../config';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
const API_URL = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const MemberDetails = () => {
    let { id } = useParams();
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
    const [checked, setChecked] = useState('');


    useEffect(() => {

        fetch(`${API_URL}/member/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setFirstName(data[0].first_name)
                setLastName(data[0].last_name)
                setRank(data[0].rank)
                setEmail(data[0].email)
                setOrganization(+data[0].organization_id)
                setAdmin(data[0].admin)
                setVanCert(data[0].is_van_cert)
                setSedanCert(data[0].is_sedan_cert)
                setTruckCert(data[0].is_truck_cert)
                setTonCert(data[0].is_5_ton_cert)
                setHmmwvCert(data[0].is_hmmwv_cert)
                setMobilizerCert(data[0].is_mobilizer_cert)
                setAmrapCert(data[0].is_amrap_cert)
                setPatrolCert(data[0].is_patrol_cert)
                console.log(data[0]);
            });
    }, [id]);

    console.log(admin)
    console.log(van_cert)
    console.log(sedan_cert)
    console.log(ton_cert)
    console.log(amrap_cert)

    // const handleChange1 = (event) => {
    //     setChecked([event.target.checked, event.target.checked]);
    // };

    const handleChangeAdmin = (event) => {
        setChecked([event.target.checked]);
        console.log(event)
        setAdmin(checked[0])
    };



    const AssignAdmin = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                defaultValue={admin}
                label="Admin Access"
                control={<Checkbox checked={admin} onChange={handleChangeAdmin} />}

            />
        </Box>

    );

    const handleChangeVanCert = (event) => {
        console.log('vancert', event.target.checked)
        setChecked([event.target.checked]);
        setVanCert(checked[0])
    };
    const handleChangeSedanCert = (event) => {
        setChecked([event.target.checked]);
        setSedanCert(checked[0])
    };
    const handleChangeTruckCert = (event) => {
        setChecked([event.target.checked]);
        setTruckCert(checked[0])
    };
    const handleChangeTonCert = (event) => {
        setChecked([event.target.checked]);
        setTonCert(checked[0])
    };
    const handleChangeHMMWVCert = (event) => {
        setChecked([event.target.checked]);
        setHmmwvCert(checked[0])
    };
    const handleChangeMobilizerCert = (event) => {
        setChecked([event.target.checked]);
        setMobilizerCert(checked[0])
    };
    const handleChangeAMRAPCert = (event) => {
        setChecked([event.target.checked]);
        setAmrapCert(checked[0])
    };
    const handleChangePatrolCert = (event) => {
        setChecked([event.target.checked]);
        setPatrolCert(checked[0])
    };

    const Certifications = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                defaultValue={van_cert}
                label="Van"
                control={<Checkbox checked={van_cert} onChange={handleChangeVanCert} />}
            />
            <FormControlLabel
                defaultValue={sedan_cert}
                label="Sedan"
                control={<Checkbox checked={sedan_cert} onChange={handleChangeSedanCert} />}
            />
            <FormControlLabel
                defaultValue={truck_cert}
                label="Truck"
                control={<Checkbox checked={truck_cert} onChange={handleChangeTruckCert} />}
            />
            <FormControlLabel
                defaultValue={ton_cert}
                label="5-Ton Truck"
                control={<Checkbox checked={ton_cert} onChange={handleChangeTonCert} />}
            />
            <FormControlLabel
                defaultValue={hmmwv_cert}
                label="HMMWV"
                control={<Checkbox checked={hmmwv_cert} onChange={handleChangeHMMWVCert} />}
            />
            <FormControlLabel
                defaultValue={mobilizer_cert}
                label="MOBILIZER"
                control={<Checkbox checked={mobilizer_cert} onChange={handleChangeMobilizerCert} />}
            />
            <FormControlLabel
                defaultValue={amrap_cert}
                label="AMRAP"
                control={<Checkbox checked={amrap_cert} onChange={handleChangeAMRAPCert} />}
            />
            <FormControlLabel
                defaultValue={patrol_cert}
                label="Patrol Vehicle"
                control={<Checkbox checked={patrol_cert} onChange={handleChangePatrolCert} />}
            />
        </Box>
    );

    const handleMemberUpdate = async (e) => {
        e.preventDefault();
        console.log(`${API_URL}/member/updatecert/${id}`)
        try {
            const response = await fetch(`${API_URL}/member/updatecert/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    admin: admin,
                    is_van_cert: van_cert,
                    is_sedan_cert: sedan_cert,
                    is_truck_cert: truck_cert,
                     is_5_Ton_cert: ton_cert,
                     is_AMRAP_cert: amrap_cert,
                     is_HMMWV_cert: hmmwv_cert,
                     is_Mobilizer_cert: mobilizer_cert,
                     is_patrol_cert: patrol_cert
                    })
            });

            if (response.status !== 204) {
                console.log(response.status)
            } else {
                console.log('Saved')
                window.alert(`The Member Information Has Been Updated!`);
                navigate('/ManageUsers')
            }
        } catch (e) { console.log(e) }
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
                        <form
                        onSubmit={handleMemberUpdate}
                        >
                            <h1>Account Information</h1>
                            {errorMessage && <div className='failed'>{errorMessage}</div>}
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        value={firstName}
                                        // placeholder={firstName}
                                        onBlur={(e) => setFirstName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        value={lastName}
                                        // placeholder={lastName}
                                        onBlur={(e) => setLastName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        value={rank}
                                        // placeholder={rank}
                                        onBlur={(e) => setRank(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        value={organization}
                                        // placeholder={`${organization}`}
                                        onBlur={(e) => setOrganization(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        value={email}
                                        // placeholder={`${email}`}
                                        onBlur={(e) => setEmail(e.target.value)}
                                    >{email}</TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <div>
                                        Assign Admin Access
                                        {AssignAdmin}
                                    </div>
                                    <div>
                                        Certifications
                                    </div>

                                    {Certifications}
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        type="submit"
                                        variant="contained"
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