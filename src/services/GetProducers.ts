import { getRepository, In, ILike, FindOperator } from 'typeorm';
import Producer from '../models/Producer';

export interface RequestI {
  states?: string[] | string;
  eggType?: string;
  productionSystem?: string;
  city?: string;
}

interface FilterI {
  state?: FindOperator<string>;
  egg_type?: string;
  production_system?: FindOperator<string>;
  city?: string;
}

class GetProducers {
  public async execute({
    states,
    eggType,
    productionSystem,
    city,
  }: RequestI): Promise<Producer[]> {
    const producerRepository = getRepository(Producer);
    const filterObj: FilterI = {};

    if (states && states !== 'null') {
      let statesFilter;
      if (Array.isArray(states)) {
        statesFilter = states;
      } else {
        statesFilter = [states];
      }

      filterObj.state = In(statesFilter);
    }

    if (eggType) {
      filterObj.egg_type = eggType;
    }

    if (productionSystem) {
      const productionSystemLower = productionSystem.toLowerCase();
      filterObj.production_system = ILike(`%${productionSystemLower}%`);
    }

    if (city) {
      filterObj.city = city;
    }

    const filterResponse = await producerRepository
      .createQueryBuilder()
      .select('*, ST_X(geom::geometry) as lng, ST_Y(geom::geometry) as lat')
      .where(filterObj)
      .getRawMany();

    return filterResponse;
  }
}

export default GetProducers;
