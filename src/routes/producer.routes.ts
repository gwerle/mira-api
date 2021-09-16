import { Router } from 'express';
import CreateProducer from '../services/CreateProducer';

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
    productionSystem,
    eggType,
    avgEggProduction,
    animalsQuantity,
    permissionToSendInfo,
    email,
    moreInformation,
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
    productionSystem,
    eggType,
    avgEggProduction,
    animalsQuantity,
    permissionToSendInfo,
    email,
    moreInformation,
  });

  return response.json(producer);
});

producerRoutes.get('/', async (request, response) => {
  return response.json({});
});

export default producerRoutes;
