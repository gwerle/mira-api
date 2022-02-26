import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Producer from '../models/Producer';

class DeleteProducer {
  public async execute(id: string): Promise<void> {
    const producerRepository = getRepository(Producer);

    const producer = await producerRepository.findOne(id);

    if (!producer) {
      throw new AppError('Producer does not exists!');
    }

    await producerRepository.remove(producer);
  }
}

export default DeleteProducer;
