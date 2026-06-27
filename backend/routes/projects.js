const express = require('express'); 
const {
  getAllProjects,
  getFeaturedProjects,
  getProjectById,
} = require('../controllers/projectController');

const router = express.Router();

router.get('/', getAllProjects);
router.get('/featured', getFeaturedProjects);
router.get('/:id', getProjectById);

module.exports = router;