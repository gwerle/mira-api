import { getRepository } from 'typeorm';
import Producer from '../models/Producer';

interface Request {
  productionSystem: any;
}

class GetProducers {
  public async execute({ productionSystem }: Request): Promise<Producer[]> {
    const producerRepository = getRepository(Producer);

    const producers = await producerRepository.query(
      `SELECT jsonb_build_object(
          'type',     'FeatureCollection',
          'name', $1,
          'features', jsonb_agg(features.feature)
      )
      FROM (
        SELECT jsonb_build_object(
          'type',       'Feature',
          'id',         id,
          'geometry',   ST_AsGeoJSON(geom)::jsonb,
          'properties', json_build_object(
              'name', farm_name,
              'AREA DE FORNECIMENTO', supply_area,
              'BAIRRO', district,
              'CIDADE', city,
              'EMAIL', email,
              'ENDEREÇO', address,
              'ESTADO', state,
              'MÉDIA PROD. OVOS', avg_egg_production,
              'QTD ANIMAIS', animals_quantity,
              'REDES SOCIAIS', social_media,
              'SISTEMA DE PRODUÇÃO', production_system,
              'TELEFONE', phone_number,
              'TIPO DE OVO', egg_type
           )
        ) AS feature
        FROM (SELECT * FROM mira_api.public.producers where production_system_enum = $1) inputs) features`,
      [productionSystem],
    );

    return producers[0].jsonb_build_object;
  }
}

export default GetProducers;
