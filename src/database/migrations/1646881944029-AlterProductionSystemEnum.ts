import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterProductionSystemEnum1646881944029
  implements MigrationInterface
{
  name = 'AlterProductionSystemEnum1646881944029';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TYPE "public"."producers_production_system_enum_enum" RENAME TO "producers_production_system_enum_enum_old"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."producers_production_system_enum_enum" AS ENUM('CAIPIRA', 'GAIOLA', 'IN_NATURA', 'LIVRE_GAIOLA', 'ORGANICO', 'NAO_INFORMADO', 'EM_TRANSICAO', '2_SISTEMAS_PRODUCAO', '3_SISTEMAS_PRODUCAO')`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."producers" ALTER COLUMN "production_system_enum" TYPE "public"."producers_production_system_enum_enum" USING "production_system_enum"::"text"::"public"."producers_production_system_enum_enum"`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."producers_production_system_enum_enum_old"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."producers_production_system_enum_enum_old" AS ENUM('CAIPIRA', 'GAIOLA', 'IN_NATURA', 'LIVRE_GAIOLA', 'ORGANICO', 'NAO_INFORMADO', '2_SISTEMAS_PRODUCAO', '3_SISTEMAS_PRODUCAO')`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."producers" ALTER COLUMN "production_system_enum" TYPE "public"."producers_production_system_enum_enum_old" USING "production_system_enum"::"text"::"public"."producers_production_system_enum_enum_old"`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."producers_production_system_enum_enum"`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."producers_production_system_enum_enum_old" RENAME TO "producers_production_system_enum_enum"`,
    );
  }
}
