
//Stub: Use a stub to define specific behavior without verifying the calls.

import sinon from 'sinon';
import UserService from '../../src/services/UserService';

test('should return 401 for incorrect credentials using a stub', async () => {
  const userService = new UserService();
  const stub = sinon.stub(userService, 'login').rejects({ status: 401, message: 'Unauthorized' });

  try {
    await userService.login('wrong', 'credentials');
  } catch (error) {
    expect(error.status).toBe(401);
    expect(error.message).toBe('Unauthorized');
  }

  stub.restore();
});
