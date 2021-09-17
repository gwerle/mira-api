import { getRepository } from 'typeorm';
import { ProductionSystem } from '../interfaces';
import Producer from '../models/Producer';

interface Request {
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

class CreateProducer {
  public async execute({
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

    const producer = await producerRepository.query(
      'INSERT INTO producers (farm_name, address, district, city, cep, phone_number, state, social_media, supply_area, production_system_enum, production_system, egg_type, avg_egg_production, animals_quantity, email, permission_to_send_info, more_information, geom)' +
        'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, ST_SetSRID(ST_MakePoint($18, $19), 4326))',
      [
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
        email,
        permissionToSendInfo,
        moreInformation,
        long,
        lat,
      ],
    );

    await producerRepository.save(producer);

    return producer;
  }
}

export default CreateProducer;
