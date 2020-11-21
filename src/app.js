const express = require('express');
const app = express();
const cors = require ('cors');

//settings
app.set('port', process.env.PORT || 4000);

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use(require('./routes/users'));
app.use('/api/formulario', require('./routes/form'));

module.exports = app;