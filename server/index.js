require('dotenv').config();
const express = require('express');
const app = express();
const auth = require('./routes/authRoutes')
const employees = require('./employees/employees')
const admin = require('./admin/admin')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/auth',auth);
app.use('/api/employees',employees)
app.use('/api/admin',admin)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));