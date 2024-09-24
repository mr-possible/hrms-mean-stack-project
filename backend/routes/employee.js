const express = require('express');
const { getEmployees, addEmployee } = require('../controllers/employeeController');
const router = express.Router();

router.get('/employees/all', getEmployees);
router.post('/employees/add', addEmployee);

module.exports = router;