const express = require('express');

const PORT = process.env.PORT || 3002;
const app = express();

const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

app.use(apiRoutes);
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server new on port ${PORT}!`);
});