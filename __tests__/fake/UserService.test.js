
// Fake: Create a fake in-memory implementation for the user service.

class FakeUserService {

    login(username, password) {
      return new Promise((resolve, reject) => {
        if (username === 'test' && password === 'password') {
          resolve({ status: 200, data: { token: 'fake-token' } });
        } else {
          reject({ status: 401, message: 'Unauthorized' });
        }
      });
    }
  }

  test('should successfully login with fake user service', async () => {
    //arrange
    const userService = new FakeUserService();
    //act
    const response = await userService.login('test', 'password');
   //expect
    expect(response.status).toBe(200);
    expect(response.data.token).toBe('fake-token');
  });