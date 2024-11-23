import type { Config } from '@jest/types';
import { debug as _debug } from 'debug';

const debug = _debug('jest-mongodb:teardown:custom');

export default async (
  globalConfig: Config.GlobalConfig,
  projectConfig: Config.ProjectConfig,
): Promise<void> => {
  debug('standalone teardown.ts');

  await globalThis.__MONGO_MEMORY_SERVER__.stop();
  debug(
    'globalThis.__MONGO_MEMORY_SERVER__.state',
    globalThis.__MONGO_MEMORY_SERVER__.state,
  );
};
