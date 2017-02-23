import { expect } from 'chai';
import request from 'supertest';

const api = request('localhost:8080');

describe('Login suite', () => {
  it('Logs a user in', (done) => {
    api
      .post('/api/login')
      .type('form')
      .send({ username: 'PJankowski25', password: 'Payton15' })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });

  it('Fails at logging a user in', (done) => {
    api
      .post('/api/login')
      .type('form')
      .send({ username: 'PJankowski', password: 'weiufhewuihf' })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(403, done);
  });
});

describe('Signup Suite', () => {
  it('Signs a user up', (done) => {
    api
      .post('/api/signup')
      .type('form')
      .send({ username: 'a', password: 'b'})
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });

  it('Fails at signing a user up', (done) => {
    api
      .post('/api/signup')
      .type('form')
      .send({ username: 'a', password: 'b'})
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(403, done);
  });
});
