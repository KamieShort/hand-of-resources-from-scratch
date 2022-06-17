const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test routes for food table', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/foods should display list of foods', async () => {
    const res = await request(app).get('/foods');

    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Spaghetti',
      },
      {
        id: '2',
        name: 'Tacos',
      },
      {
        id: '3',
        name: 'Hamburger',
      },
      {
        id: '4',
        name: 'Jambalaya',
      },
    ]);
  });

  afterAll(() => {
    pool.end();
  });
});
