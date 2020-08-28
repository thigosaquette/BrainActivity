import express from 'express';
import ActivitiesController from './controllers/ActivitiesController';
import UsersController from './controllers/UsersController';
import SessionController from './controllers/SessionController';

const routes = express.Router();

const UsersControllers = new UsersController();
const ActivitiesControllers = new ActivitiesController();
const SessionControllers = new SessionController();

// Controle de usuários
routes.post('/users', UsersControllers.create);
routes.get('/users', UsersControllers.index);
// Controle de atividades
routes.post('/activities', ActivitiesControllers.create);
routes.delete('/activities/:id', ActivitiesControllers.delete);
routes.get('/activities', ActivitiesControllers.index);
routes.put('/activities/:id', ActivitiesControllers.update);
// Controle de seções
routes.post('/loginSessions', SessionControllers.index);

export default routes;