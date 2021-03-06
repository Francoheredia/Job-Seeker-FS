const express = require('express');
const { port } = require('./config');
const { connection } = require('./config/db');

/* IMPORTACION ROUTES */
const users = require('./routes/users');
const auth = require('./routes/auth');
const jobs = require('./routes/jobs');

connection();
const app = express();

/* MIDDLEWARE */
app.use(express.json());

/* USANDO ROUTES */
users(app);
auth(app);
jobs(app);

app.listen(port, () => {
  console.log(`El servidor esta corriendo correctamente en el puerto: ${port}`);
});
