import { Router } from 'express';
import CreateProducer from '../services/CreateProducer';
import GetProducers from '../services/GetProducers';
import UpdateProducer from '../services/UpdateProducer';
import DeleteProducer from '../services/DeleteProducer';
import GetProducerCities from '../services/GetProducerCities';
import GetProducersEggTypes from '../services/GetProducersEggTypes';

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
  const { states, city, eggType, productionSystem } = request.query;

  const producersByFiltersService = new GetProducers();
  const filterData: any = {
    states,
    eggType,
    productionSystem,
    city,
  };

  const producersByFilters = await producersByFiltersService.execute(
    filterData,
  );

  return response.json(producersByFilters);
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

producerRoutes.get('/cities', async (request, response) => {
  const { state } = request.query;

  const producerCitiesService = new GetProducerCities();

  const producerCities = await producerCitiesService.execute(state as string);

  return response.json(producerCities);
});

producerRoutes.get('/egg-types', async (request, response) => {
  const producerEggTypesService = new GetProducersEggTypes();

  const producerEggTypes = await producerEggTypesService.execute();

  return response.json(producerEggTypes);
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
