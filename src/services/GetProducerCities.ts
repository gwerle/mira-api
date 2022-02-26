import { getRepository } from 'typeorm';
import Producer from '../models/Producer';

class GetProducerCities {
  public async execute(state: string): Promise<string[]> {
    const producerRepository = getRepository(Producer);

    const cities = await producerRepository
      .createQueryBuilder()
      .select('city')
      .distinct(true)
      .orderBy('city', 'ASC')
      .where('state = :state', { state })
      .getRawMany();

    const formattedCities = cities.map(item => item.city);

    return formattedCities;
  }
}

export default GetProducerCities;
