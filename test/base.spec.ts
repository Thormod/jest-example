// const agent = require('superagent-promise')(require('superagent'), Promise);
import agent = require('superagent');
import statusCode = require('http-status-codes');


describe('Given a website for API testing', () => {
    test('When consume POST service with query parameters', () => {
        const query = {
            name: 'John',
            age: '31',
            city: 'New York'
        };

        return agent
        .post('https://httpbin.org/post')
        .send(query)
        .then((response) => {
            expect(response.status).toBe(statusCode.OK);
            expect(response.body.json).toMatchSnapshot();
        });
    });

    test('When consume GET service with query parameters', () => {
        const query = {
            name: 'John',
            age: '31',
            city: 'New York'
        };

        return agent.get('https://httpbin.org/get')
        .query(query)
        .then((response) => {
            expect(response.status).toBe(statusCode.OK);
            expect(response.body.args).toMatchSnapshot();
        });
    });

    test('When consume DELETE service with query parameters', () => {
        const body = {
          name: 'Sebastián',
          age: 23,
          city: 'Medellin'
        };
    
        return agent
        .del('https://httpbin.org/delete')
        .send(body)
        .then((response) => {
            expect(response.status).toBe(statusCode.OK);
            expect(response.body.json).toMatchSnapshot();
        });
    });

    test('Consume PUT Service with query parameters', () => {
        const body = {
            name: 'Sebastián',
            age: 23,
            city: 'Medellin'
        };

        return agent
        .put('https://httpbin.org/put')
        .send(body)
        .then((response) => {
            expect(response.status).toBe(statusCode.OK);
            expect(response.body.json).toMatchSnapshot();
        });
    });
    
    test('Consume PATCH Service with query parameters', () => {
        const body = {
          name: 'Sebastián',
          age: 23,
          city: 'Medellin'
        };
    
        return agent
        .patch('https://httpbin.org/patch')
        .send(body)
        .then((response) => {
            expect(response.status).toBe(statusCode.OK);
            expect(response.body.json).toMatchSnapshot();
        });
    });
});


