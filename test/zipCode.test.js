const request = require('supertest');
const express = require('express');
const router = require('../routes/zipCodes'); 

const app = express();
app.use(express.json());
app.use('/api', router);

describe('GET /api/:zipCode', () => {
  test('It should respond with zip code details', async () => {
    const zipCode = '00007';  

    const response = await request(app).get(`/api/${zipCode}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      "FI": {
        "city": expect.any(String),
        "country": "Finland"
      }
    });
  });

  test('It should respond with zip code details', async () => {
    const zipCode = 'IM2'; 

    const response = await request(app).get(`/api/${zipCode}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        "GB": {
            "city": "",
            "country": "Great Britain"
        }
    });
  });

  test('It should handle errors and respond with 404', async () => {
    const invalidZipCode = 'ABC'; 

    const response = await request(app).get(`/api/${invalidZipCode}`);

    expect(response.status).toBe(404);
  });
});
