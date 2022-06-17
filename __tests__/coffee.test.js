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

  it('/coffee/:id should return coffee details', async () => {
    const res = await request(app).get('/coffee/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Ethiopia Yirgacheffe',
      flavor: 'Citrus',
      roast: 'Light Medium',
    });
  });

  it('POST /coffee should create a new coffee', async () => {
    const resp = await request(app).post('/coffee').send({
      name: 'Hazelnut Nespresso',
      flavor: 'Hazelnut',
      roast: 'Light Medium',
    });
    expect(resp.body.name).toBe('Hazelnut Nespresso');
    expect(resp.body.flavor).toBe('Hazelnut');
    expect(resp.body.roast).toBe('Light Medium');
  });

  afterAll(() => {
    pool.end();
  });
});
