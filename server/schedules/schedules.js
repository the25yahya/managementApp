const express = require("express");
const router = express.Router();
const pool = require('../db'); // PostgreSQL connection pool

// Get all department schedules
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT ds.*, d.name AS department_name
      FROM department_schedules ds
      JOIN departments d ON ds.department_id = d.id
      ORDER BY d.name, ds.day;
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching department schedules:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a department schedule
router.post('/add', async (req, res) => {
  const { department_id, day, start_time, end_time } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO department_schedules (department_id, day, start_time, end_time)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [department_id, day, start_time, end_time]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding department schedule:', err);
    res.status(500).json({ error: 'Failed to add schedule' });
  }
});

module.exports = router;
