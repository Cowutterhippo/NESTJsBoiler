import { photoProviders } from './../database/providers/photo.providers';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosResolver } from './photos.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...photoProviders,
    PhotosResolver, 
    PhotosService
  ]
})
export class PhotosModule {}
