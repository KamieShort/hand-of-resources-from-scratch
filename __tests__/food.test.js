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

  it('/foods/:id should return food details', async () => {
    const res = await request(app).get('/foods/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Spaghetti',
      type: 'Italian',
      ingredients: 'Noodles, Meatballs, Sauce',
    });
  });

  it('POST /foods should create a new food item', async () => {
    const resp = await request(app).post('/foods').send({
      name: 'Chili Dogs',
      type: 'American',
      ingredients: 'Chili and Hotdogs',
    });
    expect(resp.body.name).toBe('Chili Dogs');
    expect(resp.body.type).toBe('American');
    expect(resp.body.ingredients).toBe('Chili and Hotdogs');
  });

  it('PUT / foods/:id should update food', async () => {
    const resp = await request(app)
      .put('/foods/2')
      .send({ name: 'Clam Chowder' });
    expect(resp.status).toEqual(200);
    expect(resp.body.name).toEqual('Clam Chowder');
  });

  afterAll(() => {
    pool.end();
  });
});
