const bcrypt = require('bcrypt');
const cors = require('cors');
const express = require('express');
const app = express();
const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config);

app.use(express.json()).use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true // enable set cookie
}));
// const { hash, compare } = bcrypt;
const SALTS = 12;

const encryptPassword = async (password) => {
    const hash = await bcrypt.hash(password, SALTS);
    return hash;
}

const comparePassword = async (password, hash) => {
    try {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    } catch (error) {
        console.log(error)
        throw "Error comparing password";
    }

}

app.get('/', (req, res) => {
    res.status(200).send('Got / 🙂');
});

app.get('/member', (req, res) => { // Display all Members from members table in browser
    knex('member')
        .select('*')
        .then(items => {
            res.status(200).send(items);
        });
});

app.get('/organization', (req, res) => { // Display all Organizations from organizations table in browser
    knex('organization')
        .select('*')
        .then(items => {
            res.status(200).send(items);
        });
});

app.get('/reservation', (req, res) => { // Display all Reservations from reservations table in browser
    knex('reservation')
        .select('*')
        .then(items => {
            res.status(200).send(items);
        });
});

app.get('/vehicle', (req, res) => { // Display all Vehicles from vehicles table in browser
    knex('vehicle')
        .select('*')
        .then(items => {
            res.status(200).send(items);
        });
});

app.get('/report', (req, res) => { // Display all Incidents from incident_reports table in browser
    knex('incident_report')
        .select('*')
        .then(items => {
            res.status(200).send(items);
        });
});

// app.post('/login', async (req, res) => { // Authentication
//     let hashed = await (knex('member').where('username', req.body.username.toLowerCase()).select('password_hash'));
//     try {
//       hashed = hashed[0].password_hash;
//       compare(req.body.password, hashed)
//         .then(match =>  match ? res.status(200).end() : res.status(403).end())
//     } catch (e) {
//       res.status(500).end();
//     }
//   });

// POST Login to an already existing account
app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // console.log('Cookies: ', req.cookies)
    // console.log('Session: ', req.session)
    // console.log('Body: ', req.body)
    // console.log('Signed Cookies: ', req.signedCookies)

    const user = await knex('member')
        .select('*')
        .where('username', username)
        .catch(err => { console.log(err) });
    if (user.length > 0) {
        bcrypt.compare(password, user[0].password, (error, response) => {
            if (response) {
                req.session.user = user;
                console.log(req.session.user);
                res.send({ message: "User authenticated" });
            } else {
                res.send({ message: "Username or password incorrect" });
            }
        });
    }
    // http://localhost:8080/login
})

// POST New Account >>>> TODO Validate + Connect
app.post('/user', async (req, res) => {
    let num = (await knex('member').max('id as max').first()).max + 1;
    let hashed = await hash(req.body.password, SALTS);
    knex('member')
        .insert(
            {   id: num,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rank: req.body.rank,
                username: req.body.username,
                password_hash: hashed,
                organization_id: req.body.organization_id,
                admin: req.body.admin,
                is_van_cert: req.body.van,
                is_sedan_cert: req.body.sedan,
                is_truck_cert: req.body.truck}
        )
        .then(res.status(201).end())
        .catch((e) => res.status(500).end())
    // http://localhost:8080/vehicle/org/1
})

// Query Vehicle by Org ID >>>> TODO Validate + Connect
app.get('/vehicle/org/:id', (req, res) => {
    let { id } = req.params;
    knex('vehicle')
        .where('organization_id', id)
        .then(items => {
            res.status(200).send(items);
        }).catch(e => console.log(e))
    // http://localhost:8080/vehicle/org/1
})

// GET Query Vehicle by Vehicle ID >>>> TODO Validate + Connect
app.get('/vehicle/:id', (req, res) => {
    let { id } = req.params;
    knex('vehicle')
        .where('id', id)
        .then(items => {
            res.status(200).send(items);
        }).catch(e => console.log(e))
    // http://localhost:8080/vehicle/1
})

// GET Query Member by Member ID  >>>> TODO Validate + Connect
app.get('/member/:id', (req, res) => {
    let { id } = req.params;
    knex('member')
        .where('id', id)
        .then(items => {
            res.status(200).send(items);
        }).catch(e => console.log(e))
    // http://localhost:8080/member/1
})

// TODO GET Incident Report by Vehicle ID
app.get('/report/vehicle/:id', (req, res) => {
    let { id } = req.params;
    knex('incident_report')
        .where('vehicle_id', id)
        .then(items => {
            res.status(200).send(items);
        }).catch(e => console.log(e))
    // http://localhost:8080/report/vehicle/1
})

// GET Reservation by Member ID  >>>> TODO Validate + Connect // TODO Add isApproved bool to table/logic
app.get('/reservation/member/:id', (req, res) => {
    let { id } = req.params;
    knex('reservation')
        .where('member_id', id)
        .then(items => {
            res.status(200).send(items);
        }).catch(e => console.log(e))
    // http://localhost:8080/reservation/member/1
})

// GET Reservation by Vehicle ID  >>>> TODO Validate + Connect // TODO Add isApproved bool to table/logic
app.get('/reservation/vehicle/:id', (req, res) => {
    let { id } = req.params;
    knex('reservation')
        .where('vehicle_id', id)
        .then(items => {
            res.status(200).send(items);
        }).catch(e => console.log(e))
    // http://localhost:8080/reservation/vehicle/1
})

module.exports = app;