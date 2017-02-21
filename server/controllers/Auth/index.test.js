import { expect } from 'chai';
import request from 'supertest';

const api = request('localhost:8080');

describe('Auth suite', () => {
  it('Logs a user in', () => {
    api
      .post('/api/login', { username: 'PJankowski25', password: 'Payton15'})
      .set('Accept', 'application/json')
      .expect('Content-Type', '/json/')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });

  it('Fails at logging a user in', () => {
    api
      .post('/api/login', { username: 'test', password: 'one'})
      .set('Accept', 'application/json')
      .expect('Content-Type', '/json/')
      .expect(403)
      .end((err, res) => {
        if (err) throw err;
      });
  });
});
