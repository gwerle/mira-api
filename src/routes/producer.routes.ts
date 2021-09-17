import { Router } from 'express';
import CreateProducer from '../services/CreateProducer';
import GetProducers from '../services/GetProducers';

const producerRoutes = Router();

producerRoutes.post('/', async (request, response) => {
  const {
    farmName,
    address,
    district,
    city,
    cep,
    phoneNumber,
    state,
    socialMedia,
    supplyArea,
    productionSystemEnum,
    productionSystem,
    eggType,
    avgEggProduction,
    animalsQuantity,
    permissionToSendInfo,
    email,
    moreInformation,
    lat,
    long,
  } = request.body;

  const createProducerService = new CreateProducer();

  const producer = await createProducerService.execute({
    farmName,
    address,
    district,
    city,
    cep,
    phoneNumber,
    state,
    socialMedia,
    supplyArea,
    productionSystemEnum,
    productionSystem,
    eggType,
    avgEggProduction,
    animalsQuantity,
    permissionToSendInfo,
    email,
    moreInformation,
    lat,
    long,
  });

  return response.json(producer);
});

producerRoutes.get('/', async (request, response) => {
  const { productionSystem } = request.query;

  const getProducersService = new GetProducers();

  const producers = await getProducersService.execute({ productionSystem });

  return response.json(producers);
});

producerRoutes.get('/all', async (request, response) => {
  const getProducersService = new GetProducers();

  const producers = await getProducersService.getAll();

  return response.json(producers);
});

export default producerRoutes;
