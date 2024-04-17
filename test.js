import request from 'supertest';
import app from './index'; // Assuming your Express app is exported from 'index.js'

describe('GET /api/auth/get-user-info', () => {
  it('should return user info for authenticated user', async () => {
    // Mock an authenticated user by providing a valid JWT token
    const token = 'YOUR_VALID_JWT_TOKEN';

    // Make a GET request to the getUserInfo route with the token in the Authorization header
    const response = await request(app)
      .post('/api/auth/get-user-info')
      .set('Authorization', `Bearer ${token}`);

    // Assert that the response status is 200
    expect(response.status).toBe(200);

    // Assert that the response body contains the expected user info properties
    expect(response.body).toHaveProperty('user');
    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user).toHaveProperty('email');
    // Add assertions for other user properties as needed
  });

  it('should return 401 if no token is provided', async () => {
    // Make a GET request to the getUserInfo route without providing a token
    const response = await request(app).post('/api/auth/get-user-info');

    // Assert that the response status is 401
    expect(response.status).toBe(401);
  });

  // Add more test cases as needed to cover different scenarios
});
