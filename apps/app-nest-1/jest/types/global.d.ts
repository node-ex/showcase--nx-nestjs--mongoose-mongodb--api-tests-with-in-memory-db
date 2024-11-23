import type { MongoMemoryServer } from 'mongodb-memory-server';
import type { Connection } from 'mongoose';

declare global {
  /**
   * Available in the global Node.js context
   */
  // eslint-disable-next-line no-var
  var __MONGO_MEMORY_SERVER__: MongoMemoryServer;

  /**
   * Available in the isolated test context
   */
  // eslint-disable-next-line no-var
  var __MONGOOSE_CONNECTION__: Connection;
}

export {};
