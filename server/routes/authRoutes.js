const express = require('express')
const jwt = require('jsonwebtoken');
const pool = require('../db')
const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Query user by username
      const result = await pool.query(
        'SELECT id, username, password FROM login WHERE username = $1',
        [username]
      );
  
      if (result.rows.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const user = result.rows[0];
  
      // Direct plain-text password comparison
      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Create token payload
      const payload = {
        id: user.id,
        username: user.username
      };
  
      // Sign the token
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  
      // Return token
      res.json({ token });
    } catch (err) {
      console.error('Login error:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  module.exports = router;