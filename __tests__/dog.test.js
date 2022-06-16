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
      },
      {
        id: '2',
        name: 'Berry',
      },
      {
        id: '3',
        name: 'Storm',
      },
      {
        id: '4',
        name: 'Leo',
      },
    ]);
  });

  it('/dogs/:id should return dog details with dogs', async () => {
    const res = await request(app).get('/dogs/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Kimber',
      breed: 'Silver Lab',
      age: 5,
    });
  });

  it('POST /dogs should create a new dog', async () => {
    const resp = await request(app).post('/dogs').send({
      name: 'Oscar',
      breed: 'Corgi',
      age: 3,
    });
    expect(resp.body.name).toBe('Oscar');
    expect(resp.body.breed).toBe('Corgi');
    expect(resp.body.age).toBe(3);
  });

  afterAll(() => {
    pool.end();
  });
});
