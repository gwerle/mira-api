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
  })
  production_system: ProductionSystem;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Producer;
