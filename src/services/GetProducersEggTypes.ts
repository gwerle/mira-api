import { getRepository } from 'typeorm';
import Producer from '../models/Producer';

class GetProducerEggType {
  public async execute(): Promise<string[]> {
    const producerRepository = getRepository(Producer);

    const eggTypes = await producerRepository
      .createQueryBuilder()
      .select('egg_type')
      .distinct(true)
      .orderBy('egg_type', 'ASC')
      .getRawMany();

    const formattedEggTypes = eggTypes.map(item => item.egg_type);

    return formattedEggTypes;
  }
}

export default GetProducerEggType;
