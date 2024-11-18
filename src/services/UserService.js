// UserService.js
export default class UserService {
    login(username, password) {
      // Assume a real API call happens here
      return fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      });
    }
  }