const express = require('express');
const app = express.Router();
module.exports = app;
const bcrypt = require('bcrypt');
const { hash, compare } = bcrypt;
const SALTS = 12;
const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development']);


// const encryptPassword = async (password) => {
//   const hash = await bcrypt.hash(password, SALTS);
//   return hash;
// }

// const comparePassword = async (password, hash) => {
//   try {
//     const isMatch = await bcrypt.compare(password, hash);
//     return isMatch;
//   } catch (error) {
//     console.log(error)
//     throw "Error comparing password";
//   }

//}
// GET All Members from member table
app.get('/', (req, res) => {
  knex('member')
    .select('*')
    .orderBy('id', 'asc')
    .then(items => {
      res.status(200).send(items);
    })
    .catch(e => res.status(500).end())
  // http://localhost:8080/member
});

// GET All Incident Reports from incident_reports table by ID
app.get('/:id', (req, res) => {
  let { id } = req.params;
  knex('member')
    .where('id', id)
    .then(items => {
      res.status(200).send(items);
    }).catch(e => res.status(500).end())
  // http://localhost:8080/member/1
});

// POST username and password for check against user table password_hash, 200 = match, 403 = wrong, 500 = server issue
app.post('/login', async (req, res) => {
  try {
    let { username, password } = req.body;
    const hashed = await knex('member').where('username', username).select('*');
    const match = await compare(password, hashed[0].password_hash);
    match ? res.status(200).send(hashed[0]) : res.status(403).end()
  } catch (e) { res.status(500).send(e) }
  // http://localhost:8080/member/login
});

// POST New Account >>>> TODO Validate + Connect
app.post('/new', async (req, res) => {
  let num = (await knex('member').max('id as max').first()).max + 1;
  let hashed = await hash(req.body.password, SALTS);
  knex('member')
    .insert(
      {
        id: num,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        rank: req.body.rank,
        email: req.body.email,
        username: req.body.username,
        password_hash: hashed,
        organization_id: req.body.organization_id,
        admin: false,
        is_van_cert: false,
        is_sedan_cert: false,
        is_truck_cert: false
      }
    )
    .then(res.status(201).end())
    .catch((e) => res.status(500).end())
  // http://localhost:8080/member/new
});

//PATCH update member information
app.patch('/updatemember/:id', async (req, res) => {

  try {
    let hashed = await hash(req.body.password, SALTS);
    knex('member')
      .where('id', req.params.id)
      .update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          rank: req.body.rank,
          email: req.body.email,
          username: req.body.username,
          password_hash: hashed,
          organization_id: req.body.organization_id,
          is_van_cert: req.body.organization_id,
          is_sedan_cert: req.body.is_sedan_cert,
          is_truck_cert: req.body.is_truck_cert,
          is_5_ton_cert: req.body.is_5_ton_cert,
          is_amrap_cert: req.body.is_amrap_cert,
          is_hmmwv_cert: req.body.is_hmmwv_cert,
          is_mobilizer_cert: req.body.is_mobilizer_cert,
          is_patrol_cert: req.body.is_patrol_cert,
        }
      )
      .then(data =>
        res.status(204).end()
      ).catch(e => res.status(403).end());
  }
  catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/updatemember/1
});


// PATCH update member to admin
app.patch('/admin/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ admin: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/admin/1
})

// PATCH update member to not admin
app.patch('/unadmin/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ admin: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unadmin/1
})

// PATCH update member to van certed
app.patch('/vancert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_van_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/vancert/1
})

// PATCH update member to not van certed
app.patch('/unvancert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_van_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unvancert/1
})


// PATCH update member to truck certed
app.patch('/truckcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_truck_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/truckcert/1
})

// PATCH update member to not truck certed
app.patch('/untruckcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_truck_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/untruckcert/1
})

// PATCH update member to sedan certed
app.patch('/sedancert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_sedan_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/sedancert/1
})

// PATCH update member to not sedan certed
app.patch('/unsedancert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_sedan_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unsedancert/1
})

// PATCH update member to 5ton certed
app.patch('/5toncert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_5_ton_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/5toncert/1
})

// PATCH update member to not 5ton certed
app.patch('/un5toncert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_5_ton_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/un5toncert/1
})

// PATCH update member to amrap certed
app.patch('/amrapcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_amrap_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/amrapcert/1
})

// PATCH update member to not amrap certed
app.patch('/unamrapcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_amrap_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unamrapcert/1
})

// PATCH update member to hmmwv certed
app.patch('/hmmwvcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_hmmwv_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/hmmwvcert/1
})

// PATCH update member to not hmmwv certed
app.patch('/unhmmwvcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_hmmwv_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unhmmwvcert/1
})

// PATCH update member to mobilizer certed
app.patch('/mobilizercert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_mobilizer_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/mobilizercert/1
})

// PATCH update member to not mobilizer certed
app.patch('/unmobilizercert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_mobilizer_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unmobilizercert/1
})

// PATCH update member to patrol certed
app.patch('/patrolcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_patrol_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/patrolcert/1
})

// PATCH update member to not patrol certed
app.patch('/unpatrolcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_patrol_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unpatrolcert/1
})

// PATCH update member to patrol certed
app.patch('/tankcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_tank_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/tankcert/1
})

// PATCH update member to not patrol certed
app.patch('/untankcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_tank_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/untankcert/1
})

// PATCH update member to patrol certed
app.patch('/semitruckcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_semitruck_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/semitruckcert/1
})

// PATCH update member to not patrol certed
app.patch('/unsemitruckcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_semitruck_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unsemitruckcert/1
})

// PATCH update member to patrol certed
app.patch('/forkliftcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_forklift_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/forkliftcert/1
})

// PATCH update member to not patrol certed
app.patch('/unforkliftcert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_forklift_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unforkliftcert/1
})

// PATCH update member to patrol certed
app.patch('/landrovercert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_landrover_cert: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/landrovercert/1
})

// PATCH update member to not patrol certed
app.patch('/unlandrovercert/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ is_landrover_cert: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unlandrovercert/1
})