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
  productionSystem: ProductionSystem;
  eggType: string;
  avgEggProduction: string;
  animalsQuantity: string;
  permissionToSendInfo: boolean;
  email: string;
  moreInformation: string;
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
    eggType,
    avgEggProduction,
    animalsQuantity,
    permissionToSendInfo,
    email,
    moreInformation,
  }: Request): Promise<Producer> {
    const producerRepository = getRepository(Producer);

    const producer = producerRepository.create({
      farm_name: farmName,
      address,
      district,
      city,
      cep,
      phone_number: phoneNumber,
      state,
      social_media: socialMedia,
      supply_area: supplyArea,
      production_system: productionSystem,
      egg_type: eggType,
      avg_egg_production: avgEggProduction,
      animals_quantity: animalsQuantity,
      email,
      permission_to_send_info: permissionToSendInfo,
      more_information: moreInformation,
    });

    await producerRepository.save(producer);

    return producer;
  }
}

export default CreateProducer;
