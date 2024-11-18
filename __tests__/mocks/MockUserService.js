
// Mock: Use Jest to create a mock implementation for specific method behavior and verify calls.

import UserService from '../../src/services/UserService';

test('should call login method once', () => {
  const userService = new UserService();
  userService.login = jest.fn().mockResolvedValue({ status: 200 });

  userService.login('test', 'password');
  expect(userService.login).toHaveBeenCalledTimes(1);
  expect(userService.login).toHaveBeenCalledWith('test', 'password');
});
