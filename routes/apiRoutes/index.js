const router = require('express').Router();

// const apiRoutes = require('./api');
const notesRoutes = require('./notes-routes.js');

router.use('/api', notesRoutes);
// router.use('/api', apiRoutes);

module.exports = router;