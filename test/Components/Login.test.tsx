/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { Login } from '../../src/Components/Login';
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react';
import { act } from 'react-dom/test-utils';
import { User } from '../../src/Model/Model';

const someUser: User = {
    userName: 'user',
    email: '1234'
}

describe('Login component test suite', () => {
    const authServiceMock = {
        login: jest.fn()
    }
    const setUserMock = jest.fn();

    beforeEach(() => {
        act(() => {
            render(
                <Login authService={authServiceMock as any} setUser={setUserMock} />
            )
        })
    })
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('Renders correctly initial document', () => {
        const title = screen.getByText('Please login');
        expect(title).toBeTruthy();

        const inputs = screen.getAllByDisplayValue('');
        expect(inputs).toHaveLength(2);

        const loginInput = screen.getByDisplayValue('Login');
        expect(loginInput).toBeTruthy();
        console.log('renders correctly initial document')
    })

    it('Passes credentials correctly', async () => {
        const loginInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const loginButton = screen.getByDisplayValue('Login');

        await act(async () => {
            fireEvent.change(loginInput, { target: { value: 'someUser' } });
            fireEvent.change(passwordInput, { target: { value: 'somePass' } });
            fireEvent.click(loginButton);
        })

        expect(authServiceMock.login).toBeCalledWith(
            'someUser',
            'somePass'
        )
        console.log('Passes credentials correctly')
    })

    it('Correctly handles login success', async () => {
        authServiceMock.login.mockResolvedValueOnce(someUser);
        const loginInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const loginButton = screen.getByDisplayValue('Login');

        await act(async () => {
            fireEvent.change(loginInput, { target: { value: 'user' } });
            fireEvent.change(passwordInput, { target: { value: '1234' } });
            fireEvent.click(loginButton);
        })

        const statusLabel = screen.getByLabelText("Login Successful");
        expect(statusLabel).toBeInTheDocument();
        expect(setUserMock).toBeCalledWith(someUser);
        console.log('Login Successful');
    });

    it('Correctly handles login fail', async () => {
        authServiceMock.login.mockResolvedValueOnce(undefined);
        const loginInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const loginButton = screen.getByDisplayValue('Login');

        await act(async () => {
            fireEvent.change(loginInput, { target: { value: 'someUser' } });
            fireEvent.change(passwordInput, { target: { value: 'somePass' } });
            fireEvent.click(loginButton);
        })

        const statusLabel = screen.getByLabelText("Login Unsuccessful");
        expect(statusLabel).toBeInTheDocument();
        console.log('Login Unsuccessful');
    });
})

function createRoot(arg0: HTMLDivElement) {
    throw new Error('Function not implemented.');
}
