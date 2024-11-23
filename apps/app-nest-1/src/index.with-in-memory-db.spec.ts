import { debug as _debug } from 'debug';

const debug = _debug('jest-mongodb:test');

describe('Index', () => {
  it('test1', async () => {
    debug("process.env['MONGODB_URL']", process.env['MONGODB_URL']);
    debug(
      'globalThis.__MONGOOSE_CONNECTION__.name',
      globalThis.__MONGOOSE_CONNECTION__.name,
    );

    await globalThis.__MONGOOSE_CONNECTION__.db
      .collection('test1')
      .insertOne({ test: 'test' });
    const collectionNames = (
      await globalThis.__MONGOOSE_CONNECTION__.db.collections()
    ).map((collection) => collection.collectionName);
    debug('test1 collectionNames', collectionNames);

    expect(true).toBe(true);
  });

  it('test2', async () => {
    await globalThis.__MONGOOSE_CONNECTION__.db
      .collection('test2')
      .insertOne({ test: 'test' });
    const collectionNames = (
      await globalThis.__MONGOOSE_CONNECTION__.db.collections()
    ).map((collection) => collection.collectionName);
    debug('test2 collectionNames', collectionNames);
  });
});
