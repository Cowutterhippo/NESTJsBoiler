import { DataSource } from 'typeorm';
import { Photo } from '../entities/photo.entity';
import { DataBaseConstants as DBC } from '../constants';

export const photoProviders = [
  {
    provide: DBC.DEV.PHOTO,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
    inject: [DBC.DEV.DATA_SOURCE],
  },
];