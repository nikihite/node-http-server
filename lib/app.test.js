import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
    const { text, status } = await request(app).get('/not-found');

    expect(status).toBe(404);
    expect(text).toBe('Not Found');
});

it('receives 404 when requesting unknown resource/method', async () => {
    await request(app)
        .patch('/api/v1/cats')
        .expect(404);
});

it('receives 404 when requesting unknown resource/method', async () => {
    await request(app)
        .patch('/api/v1/candies')
        .expect(404);
});

it('receives 404 when requesting unknown resource/method', async () => {
    await request(app)
        .patch('/api/v1/sauces')
        .expect(404);
});
it('GET will return cat object', async () => {
    await request(app)
        .get('/api/cats')
        .expect(200);
});
  
it('GET will return candy object', async () => {
    await request(app)
        .get('/api/candies')
        .expect(200);
});
  
it('GET will return sauce object', async () => {
    await request(app)
        .get('/api/sauces')
        .expect(200);
});