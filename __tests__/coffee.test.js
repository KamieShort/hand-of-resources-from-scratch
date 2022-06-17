const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test routes for coffee table', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/coffee should display list of coffees', async () => {
    const res = await request(app).get('/coffee');

    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Ethiopia Yirgacheffe',
      },
      {
        id: '2',
        name: 'Over Yonder',
      },
      {
        id: '3',
        name: 'All Seasons Blend',
      },
      {
        id: '4',
        name: 'The Surge',
      },
    ]);
  });

  afterAll(() => {
    pool.end();
  });
});
