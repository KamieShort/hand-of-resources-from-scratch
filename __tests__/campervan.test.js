const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test routes for campervans table', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/campervans should display list of campervans', async () => {
    const res = await request(app).get('/campervans');

    expect(res.body).toEqual([
      {
        id: '1',
        make: 'Mercedes',
      },
      {
        id: '2',
        make: 'Dodge',
      },
      {
        id: '3',
        make: 'Freightliner',
      },
      {
        id: '4',
        make: 'Ford',
      },
    ]);
  });

  it('/campervans/:id should return campervan details', async () => {
    const res = await request(app).get('/campervans/1');
    expect(res.body).toEqual({
      id: '1',
      make: 'Mercedes',
      model: 'Sprinter',
      builder: 'custom build',
    });
  });

  it('POST /campervans should create a new van', async () => {
    const resp = await request(app).post('/campervans').send({
      make: 'Nissan',
      model: 'NV Cargo',
      builder: 'NW Van Builders',
    });
    expect(resp.body.make).toBe('Nissan');
    expect(resp.body.model).toBe('NV Cargo');
    expect(resp.body.builder).toBe('NW Van Builders');
  });

  it('PUT / campervans/:id should update campervan by id', async () => {
    const resp = await request(app)
      .put('/campervans/2')
      .send({ make: 'Old School Ford' });
    expect(resp.status).toEqual(200);
    expect(resp.body.make).toEqual('Old School Ford');
  });

  it('DELETE / campervans/:id should delete a van', async () => {
    const resp = await request(app).delete('/campervans/2');
    expect(resp.status).toEqual(200);
    const { body } = await request(app).get('/campervans/2');
    expect(body).toEqual(null);
  });

  afterAll(() => {
    pool.end();
  });
});
