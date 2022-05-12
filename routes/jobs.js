const express = require('express');
const jobsServices = require('../services/jobsservices');

function jobs(app) {
  const router = express.Router();
  const JobsServices = new jobsServices();

  app.use('/api/jobs', router);
  router.post('/', async (req, res) => {
    const {
      body: { name, categories, country },
    } = req;
    const newJob = {
      name,
      categories,
      country,
    };

    const Job = await JobsServices.add(newJob);
    Job
      ? res.status(200).json({ message: 'Trabajo creado correctamente', Job })
      : res.status(404).json({ message: 'Error algo salio mal' });
  });

  router.get('/', async (req, res) => {
    const jobs = await JobsServices.getAll();
    jobs
      ? res.status(200).json({ message: 'Request exitosa', jobs })
      : res.status(404).json({ message: 'Error algo salio mal' });
  });

  router.get('/filter', async (req, res) => {
    const {
      query: { category },
    } = req;

    const filtered = await JobsServices.filterCategories(category);
    filtered
      ? res.status(200).json({ message: 'Request exitosa', filtered })
      : res.status(404).json({ message: 'Error algo salio mal' });
  });
}

module.exports = jobs;
