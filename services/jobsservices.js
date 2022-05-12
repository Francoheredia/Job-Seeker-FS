const jobs = require('../models/jobs');

class Jobs {
  async add(data) {
    const newJob = await jobs.create(data);
    return newJob;
  }
  async getAll() {
    try {
      const Jobs = await jobs.find();
      return Jobs;
    } catch (error) {
      console.log(error);
    }
  }

  async filterCategories(category) {
    try {
      const filtered = await jobs.find({ categories: category });

      return filtered;
    } catch (error) {
      console.log(error);
    }
  }

  async filterByCountry(country) {
    try {
      const filtered = await jobs.find({ country: country });
      return filtered;
    } catch (error) {
      console.log(error);
    }
  }

  async orderByRange(price) {
    try {
      const filtered = await jobs.find({ rangePrice: { $lte: price } });
      console.log(filtered);
      const filterTota = filtered.sort();

      return filterTota;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const deleteProduct = await jobs.findByIdAndDelete(id);
      return deleteProduct;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Jobs;

// async filterCategories(category) {
//   try {
//     const regex = new RegExp(category, 'i');
//     const filtered = await jobs.find({ category: { $regex: regex } });
//     console.log(filtered);
//     return filtered;
//   } catch (error) {
//     console.log(error);
//   }
// }
// }
