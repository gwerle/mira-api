import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProducerTable1629165842492
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'producers',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'farm_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'district',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cep',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'phone_number',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'social_media',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'supply_area',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'production_system',
            type: 'enum',
            enum: [
              'CAIPIRA',
              'GAIOLA',
              'IN_NATURA',
              'LIVRE_GAIOLA',
              'ORGANICO',
              'NAO_INFORMADO',
            ],
            isNullable: false,
          },
          {
            name: 'egg_type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'avg_egg_production',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'animals_quantity',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'permission_to_send_info',
            type: 'boolean',
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'more_information',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('producers');
  }
}
