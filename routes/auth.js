const express = require('express');
const Authservices = require('../services/authservices');

function Auth(app) {
  const router = express.Router();
  const authservices = new Authservices();
  app.use('/api/auth', router);
  router.post('/login', async (req, res) => {
    const result = await authservices.login(req.body);
    return res.status(result.error ? 400 : 200).json(result);
  });
  router.post('/signup', async (req, res) => {
    const result = await authservices.signup(req.body);
    return res.status(result.error ? 400 : 200).json(result);
  });
}

module.exports = Auth;
