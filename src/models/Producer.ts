import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductionSystem } from '../interfaces';

@Entity('producers')
class Producer {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  farm_name: string;

  @Column()
  address: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  cep: number;

  @Column()
  phone_number: string;

  @Column()
  state: string;

  @Column()
  social_media: string;

  @Column()
  supply_area: string;

  @Column({
    name: 'production_system_enum',
    type: 'enum',
    enum: [
      'CAIPIRA',
      'GAIOLA',
      'IN_NATURA',
      'LIVRE_GAIOLA',
      'ORGANICO',
      'NAO_INFORMADO',
      '2_SISTEMAS_PRODUCAO',
      '3_SISTEMAS_PRODUCAO',
    ],
  })
  production_system_enum: ProductionSystem;

  @Column()
  production_system: string;

  @Column()
  egg_type: string;

  @Column()
  avg_egg_production: string;

  @Column()
  animals_quantity: string;

  @Column()
  permission_to_send_info: boolean;

  @Column()
  email: string;

  @Column()
  more_information: string;

  @Column()
  geom: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Producer;
