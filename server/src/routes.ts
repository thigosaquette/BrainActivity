import express from 'express';
import ActivitiesController from './controllers/ActivitiesController';
import UsersController from './controllers/UsersController';

const routes = express.Router();

const UsersControllers = new UsersController();
const ActivitiesControllers = new ActivitiesController();

routes.post('/users', UsersControllers.create);
routes.get('/users', UsersControllers.index);

routes.post('/activities', ActivitiesControllers.create);
routes.delete('/activities/:id', ActivitiesControllers.delete);
routes.get('/activities', ActivitiesControllers.index);
routes.put('/activities/:id', ActivitiesControllers.update);

export default routes;