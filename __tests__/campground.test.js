const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test routes for campgrounds table', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/campgrounds should display a list of campgrounds', async () => {
    const res = await request(app).get('/campgrounds');

    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Champoeg State Park',
      },
      {
        id: '2',
        name: 'Feyrer Park',
      },
      {
        id: '3',
        name: 'Barton Campground',
      },
      {
        id: '4',
        name: 'Milo McIver State Park',
      },
    ]);
  });

  it('/campgrounds/:id should return campground details', async () => {
    const res = await request(app).get('/campgrounds/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Champoeg State Park',
      location: 'Newberg, OR',
      features: 'Volleyball Court',
    });
  });

  afterAll(() => {
    pool.end();
  });
});
