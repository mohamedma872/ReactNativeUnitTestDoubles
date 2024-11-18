import UserService from '../../src/services/UserService';
import fetchMock from 'jest-fetch-mock';

// Enable fetchMock before the tests
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks(); // Reset fetch mocks before each test
});

test('spy on login method', async () => {
  const userService = new UserService();

  // Mock the fetch response
  fetchMock.mockResponseOnce(JSON.stringify({ token: '12345' }));

  // Use Jest's spyOn to spy on the 'login' method
  const spy = jest.spyOn(userService, 'login');

  await userService.login('test', 'password');

  // Check if the 'login' method was called once
  expect(spy).toHaveBeenCalledTimes(1);

  // Check if the 'login' method was called with specific arguments
  expect(spy).toHaveBeenCalledWith('test', 'password');

  // Restore the original implementation
  spy.mockRestore();
});