import { getRepository, getConnection } from 'typeorm';
import AppError from '../errors/AppError';
import { ProductionSystem } from '../interfaces';
import Producer from '../models/Producer';

interface Request {
  id: number;
  farmName: string;
  address: string;
  district: string;
  city: string;
  cep: number;
  phoneNumber: string;
  state: string;
  socialMedia: string;
  supplyArea: string;
  productionSystemEnum: ProductionSystem;
  productionSystem: string;
  eggType: string;
  avgEggProduction: string;
  animalsQuantity: string;
  permissionToSendInfo: boolean;
  email: string;
  moreInformation: string;
  lat: number;
  long: number;
}

class UpdateProducer {
  public async execute({
    id,
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
    productionSystemEnum,
    eggType,
    avgEggProduction,
    animalsQuantity,
    permissionToSendInfo,
    email,
    moreInformation,
    lat,
    long,
  }: Request): Promise<Producer> {
    const producerRepository = getRepository(Producer);

    const producer = await producerRepository.findOne(id);

    if (!producer) {
      throw new AppError('Producer does not exists!');
    }

    await getConnection()
      .createQueryBuilder()
      .update(Producer)
      .set({
        farm_name: farmName,
        address,
        district,
        city,
        cep,
        phone_number: phoneNumber,
        state,
        social_media: socialMedia,
        supply_area: supplyArea,
        production_system_enum: productionSystemEnum,
        production_system: productionSystem,
        egg_type: eggType,
        avg_egg_production: avgEggProduction,
        animals_quantity: animalsQuantity,
        email,
        permission_to_send_info: permissionToSendInfo,
        more_information: moreInformation,
        geom: () => `ST_SetSRID(ST_MakePoint(${long}, ${lat}), 4326)`,
      })
      .where('id = :id', { id })
      .execute();

    const updatedProducer = await producerRepository.findOne(id);

    return updatedProducer as Producer;
  }
}

export default UpdateProducer;
