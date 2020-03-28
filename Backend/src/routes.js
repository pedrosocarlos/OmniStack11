const express = require('express');

const ongController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//rotas das ongs
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
//rotas dos incidentes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
//demais rotas
routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);


module.exports = routes;
