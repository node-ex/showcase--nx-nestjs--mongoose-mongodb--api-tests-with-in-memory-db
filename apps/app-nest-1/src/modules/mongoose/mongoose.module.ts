import { Module } from '@nestjs/common';
import { MongooseModule as _MongooseModule } from '@nestjs/mongoose';
import { debug as _debug } from 'debug';

/** Not an appropriate namespace name, but makes it simpler to filter debug statements */
const debug = _debug('jest-mongodb:mongoose-module');

export const _mongooseModuleForRoot = _MongooseModule.forRootAsync({
  useFactory: () => {
    debug('MongooseModule.forRootAsync.useFactory');
    debug('process.env[MONGODB_URL]', process.env['MONGODB_URL']);

    return {
      uri: process.env['MONGODB_URL']!,
    };
  },
});

@Module({
  imports: [_mongooseModuleForRoot],
})
export class MongooseModule {}
