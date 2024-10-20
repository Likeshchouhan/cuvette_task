const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Company = require('../models/Company');
const nodemailer = require('nodemailer');

const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newCompany = new Company({ name, email, password: hashedPassword });
    await newCompany.save();

    // Send email for verification (using nodemailer)
    // ...

    res.status(201).json({ message: 'Company registered! Please verify your email.' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = { registerCompany };
