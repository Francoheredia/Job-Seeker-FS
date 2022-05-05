const express = require('express');
const { port } = require('./config');
const { connection } = require('./config/db');

/* IMPORTACION ROUTES */
const users = require('./routes/users');
const auth = require('./routes/auth');


connection();
const app = express();

/* MIDDLEWARE */
app.use(express.json());

/* USANDO ROUTES */
users(app)
auth(app)


app.listen(port, () => {
  console.log(`El servidor esta corriendo correctamente en el puerto: ${port}`);
});
