const express = require('express');
const jobsServices = require('../services/jobsservices');

function jobs(app) {
  const router = express.Router();
  const JobsServices = new jobsServices();

  app.use('/api/jobs', router);
  router.post('/', async (req, res) => {
    const {
      body: { name, categories, country, rangePrice },
    } = req;
    const newJob = {
      name,
      categories,
      country,
      rangePrice,
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

  router.get('/filter/category', async (req, res) => {
    const {
      query: { category },
    } = req;

    const filtered = await JobsServices.filterCategories(category);
    filtered.length > 0
      ? res.status(200).json({ message: 'Request exitosa', filtered })
      : res.status(404).json({ message: `No tenemos trabajos en esta categoria ` + category });
  });
  router.get('/filter/country', async (req, res) => {
    const {
      query: { country },
    } = req;

    const filtered = await JobsServices.filterByCountry(country);

    filtered.length > 0
      ? res.status(200).json({ message: 'Request exitosa', filtered })
      : res.status(404).json({ message: `No hay registro en ` + country });
  });

  router.get('/filter/rangeprice', async (req, res) => {
    const {
      query: { price },
    } = req;
    const filtered = await JobsServices.orderByRange(price);
    console.log(filtered);
    filtered
      ? res.status(200).json({ message: 'Request exitosa', filtered })
      : res.status(404).json({ message: 'Error algo salio mal' });
  });

  router.delete('/:id', async (req, res) => {
    const {
      params: { id },
    } = req;

    const josbdelete = await JobsServices.delete(id);
    josbdelete
      ? res.status(200).json({ message: 'Request exitosa', josbdelete })
      : res.status(404).json({ message: 'Error algo salio mal' });
  });
}

module.exports = jobs;
