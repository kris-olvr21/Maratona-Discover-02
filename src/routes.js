const express = require('express'); //biblioteca para criar o servidor
const routes = express.Router(); //cria as rotas 
const ProfileController = require('./controllers/ProfileController');
const JobController = require('./controllers/JobController');
const DashboardController = require('./controllers/DashboardController');

//req, res
routes.get('/', DashboardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

module.exports = routes;