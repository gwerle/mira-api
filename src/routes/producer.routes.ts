import { Router } from 'express';
import CreateProducer from '../services/CreateProducer';
import GetProducers from '../services/GetProducers';
import UpdateProducer from '../services/UpdateProducer';
import DeleteProducer from '../services/DeleteProducer';

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

producerRoutes.put('/:id', async (request, response) => {
  const { id } = request.params;
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

  const updateProducer = new UpdateProducer();

  const newProducer = await updateProducer.execute({
    id: Number(id),
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

  return response.json(newProducer);
});

producerRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTransaction = new DeleteProducer();

  await deleteTransaction.execute(id);

  return response.status(204).send();
});

export default producerRoutes;
