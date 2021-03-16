const routers = require('express').Router();

const userRoutes = require('./users.js');
const cardsRoutes = require('./cards.js');
const errorsRoutes = require('./errors.js');

routers.use((req, res, next) => {
  req.user = {
    _id: '604f8ac00d1e5171d8bbbf9',
  };

  next();
});

routers.use('/', cardsRoutes);
routers.use('/', userRoutes);
routers.use('/', errorsRoutes);

module.exports = routers;


