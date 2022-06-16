const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test routes for dogs table', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/dogs should display list of dogs', async () => {
    const res = await request(app).get('/dogs');

    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Kimber',
        breed: 'Silver Lab',
        age: 5,
      },
      {
        id: '2',
        name: 'Berry',
        breed: 'Maltese',
        age: 10,
      },
      {
        id: '3',
        name: 'Storm',
        breed: 'Chocolate Lab',
        age: 8,
      },
      {
        id: '4',
        name: 'Leo',
        breed: 'Mix',
        age: 6,
      },
    ]);
  });

  afterAll(() => {
    pool.end();
  });
});
