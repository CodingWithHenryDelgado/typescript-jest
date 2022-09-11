/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { Logout } from '../../src/Components/Logout';
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react';
import { act } from 'react-dom/test-utils';
import { User } from '../../src/Model/Model';

const someUser: User = {
    userName: 'user',
    email: '1234'
}

describe('Logout component test suite', () => {
    const authServiceMock = {
        login: jest.fn()
    }


    const clearUser = jest.fn();

    beforeEach(() => {
        act(() => {
            render(
                <Logout authService={authServiceMock as any} user={someUser} clearUser={clearUser} />
            )
        })
    })
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('Successfully logs out the user', () => {
        const logoutmessage = screen.getByText('See you next time?');
        expect(logoutmessage).toBeTruthy();
    })
})