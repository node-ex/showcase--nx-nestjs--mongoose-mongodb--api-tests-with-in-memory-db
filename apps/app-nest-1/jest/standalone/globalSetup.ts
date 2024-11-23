import type { Config } from '@jest/types';
import { debug as _debug } from 'debug';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoMemoryServerOpts } from 'mongodb-memory-server-core/lib/MongoMemoryServer';

const debug = _debug('jest-mongodb:setup:custom');

export default async (
  globalConfig: Config.GlobalConfig,
  projectConfig: Config.ProjectConfig,
): Promise<void> => {
  // https://github.com/typegoose/mongodb-memory-server#available-options-for-mongomemoryserver
  const mongoMemoryServerOptions = {
    binary: {
      version: '7.0.12',
      checkMD5: false,
    },
  } as MongoMemoryServerOpts;
  const mongo = new MongoMemoryServer(mongoMemoryServerOptions);
  await mongo.start();

  globalThis.__MONGO_MEMORY_SERVER__ = mongo;

  // For outputting the following debug message on a new line
  debug('');
  debug('standalone setup.ts');
  debug(
    'globalThis.__MONGO_MEMORY_SERVER__.state',
    globalThis.__MONGO_MEMORY_SERVER__.state,
  );
};
