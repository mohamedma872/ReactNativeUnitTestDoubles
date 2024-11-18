import UserService from '../../src/services/UserService';

// Mock the fetch function globally
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test('should successfully login with correct credentials', async () => {
  // Mocking fetch to return a successful response
  fetch.mockResolvedValueOnce({
    status: 200,
    json: async () => ({ message: 'Login successful' }),
  });

  const userService = new UserService();

  // This is a dummy because it’s a simple function that fulfills the requirement of being a parameter but has no impact on the test itself. It has no meaningful behavior, and you aren’t asserting anything about it. It’s only there to meet the signature requirements of the login method.
  // Creating a dummy callback (a simple function that is not used)
  const dummyCallback = () => {};

  // Calling login with the dummy callback
  const response = await userService.login('test', 'password', dummyCallback);

  // Assertion: Check if the response status is correct
  expect(response.status).toBe(200);

  // Optional: Verify fetch was called with correct parameters
  expect(fetch).toHaveBeenCalledWith('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username: 'test', password: 'password' }),
  });
});
