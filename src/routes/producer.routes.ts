import { Router } from 'express';

const producerRoutes = Router();

producerRoutes.post('/', async (request, response) => {
  return response.json({});
});

producerRoutes.get('/', async (request, response) => {
  return response.json({});
});

export default producerRoutes;
