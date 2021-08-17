import { Router } from 'express';
import producerRoutes from './producer.routes';

const routes = Router();

routes.use('/producer', producerRoutes);

export default routes;
