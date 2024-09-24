const Employee = require('../models/employee');

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.addEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.json(newEmployee);
};
