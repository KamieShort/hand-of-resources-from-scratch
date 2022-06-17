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

  it('POST /campground should create a new campground ', async () => {
    const resp = await request(app).post('/campgrounds').send({
      name: 'Noti Campground',
      location: 'Noti, OR',
      features: 'Hiking',
    });
    expect(resp.body.name).toBe('Noti Campground');
    expect(resp.body.location).toBe('Noti, OR');
    expect(resp.body.features).toBe('Hiking');
  });

  afterAll(() => {
    pool.end();
  });
});
