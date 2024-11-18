// Login.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../../src/components/LoginComponent';

describe('Login Component', () => {
  it('should render input fields and login button', () => {
    const { getByTestId } = render(<Login onLogin={jest.fn()} />);
    expect(getByTestId('email-input')).toBeTruthy();
    expect(getByTestId('password-input')).toBeTruthy();
    expect(getByTestId('login-button')).toBeTruthy();
  });

  it('should call onLogin with email and password when login button is pressed', () => {
    const mockOnLogin = jest.fn();
    const { getByTestId } = render(<Login onLogin={mockOnLogin} />);

    fireEvent.changeText(getByTestId('email-input'), 'test@example.com');
    fireEvent.changeText(getByTestId('password-input'), 'password123');
    fireEvent.press(getByTestId('login-button'));

    expect(mockOnLogin).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  it('should not call onLogin if email or password is empty', () => {
    const mockOnLogin = jest.fn();
    const { getByTestId } = render(<Login onLogin={mockOnLogin} />);

    fireEvent.changeText(getByTestId('email-input'), '');
    fireEvent.changeText(getByTestId('password-input'), '');
    fireEvent.press(getByTestId('login-button'));

    expect(mockOnLogin).not.toHaveBeenCalled();
  });
});
