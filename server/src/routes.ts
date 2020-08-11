import express, { Router } from 'express';

import PointsController from './controllers/points.controller';
import ItemsController from './controllers/items.controller';

const routes = Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// index, show, create, update, delete

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id'), pointsController.show;


export default routes;