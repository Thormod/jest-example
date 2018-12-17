import superagent = require('superagent');
import httpStatusCodes = require('http-status-codes');

describe('Given a website for API testing', () => {
  test('When consume POST service with query parameters', () => {
    const query = {
      name: 'John',
      age: '31',
      city: 'New York'
    };

    return superagent
        .post('https://httpbin.org/post')
        .send(query)
        .then((response) => {
          expect(response.status).toBe(httpStatusCodes.OK);
          expect(response.body.json).toMatchSnapshot();
        });
  });

  test('When consume GET service with query parameters', () => {
    const query = {
      name: 'John',
      age: '31',
      city: 'New York'
    };

    return superagent.get('https://httpbin.org/get')
        .query(query)
        .then((response) => {
          expect(response.status).toBe(httpStatusCodes.OK);
          expect(response.body.args).toMatchSnapshot();
        });
  });

  test('When consume DELETE service with query parameters', () => {
    const body = {
      name: 'Sebastián',
      age: 23,
      city: 'Medellin'
    };

    return superagent
        .del('https://httpbin.org/delete')
        .send(body)
        .then((response) => {
          expect(response.status).toBe(httpStatusCodes.OK);
          expect(response.body.json).toMatchSnapshot();
        });
  });

  test('Consume PUT Service with query parameters', () => {
    const body = {
      name: 'Sebastián',
      age: 23,
      city: 'Medellin'
    };

    return superagent
        .put('https://httpbin.org/put')
        .send(body)
        .then((response) => {
          expect(response.status).toBe(httpStatusCodes.OK);
          expect(response.body.json).toMatchSnapshot();
        });
  });

  test('Consume PATCH Service with query parameters', () => {
    const body = {
      name: 'Sebastián',
      age: 23,
      city: 'Medellin'
    };

    return superagent
        .patch('https://httpbin.org/patch')
        .send(body)
        .then((response) => {
          expect(response.status).toBe(httpStatusCodes.OK);
          expect(response.body.json).toMatchSnapshot();
        });
  });
});
