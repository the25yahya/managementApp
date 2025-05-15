const express = require('express');
const router = express.Router();
const pool = require('../db'); // Make sure this exports a `Pool` connected using `db_string`

// GET all employees
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employees');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching employees:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/add', async (req, res) => {
  const { nom, paie, departement, role, joiningDate, contractType, img, departementColor } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO employees (nom, paie, departement, role, joiningDate, contractType, img, departementColor)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [nom, paie, departement, role, joiningDate, contractType, img, departementColor]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding employee:', err);
    res.status(500).json({ error: 'Failed to add employee' });
  }
});


// UPDATE employee by ID
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { nom, paie, departement, role, joiningDate, contractType, img } = req.body;

  try {
    const result = await pool.query(
      `UPDATE employees
       SET nom = $1, paie = $2, departement = $3, role = $4, joiningDate = $5, contractType = $6, img = $7
       WHERE id = $8 RETURNING *`,
      [nom, paie, departement, role, joiningDate, contractType, img, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating employee:', err);
    res.status(500).json({ error: 'Failed to update employee' });
  }
});

// DELETE employee by ID
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM employees WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json({ message: 'Employee deleted successfully', deleted: result.rows[0] });
  } catch (err) {
    console.error('Error deleting employee:', err);
    res.status(500).json({ error: 'Failed to delete employee' });
  }
});

module.exports = router;
