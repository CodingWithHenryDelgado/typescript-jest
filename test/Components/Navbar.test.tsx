/* eslint-disable testing-library/no-unnecessary-act */
import { Navbar } from '../../src/Components/Navbar';
import { User } from '../../src/Model/Model';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('Navbar test suite', () => {

    const someUser: User = {
        email: 'some@Email.com',
        userName: 'user'
    }

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('renders correctly with user using data test', () => {
        act(() => {
            render(
                <Navbar user={someUser} />, { wrapper: BrowserRouter }
            )
        })

        expect(screen.getByText(/Home/i)).toBeInTheDocument()

        expect(screen.getByText(/Profile/i)).toBeInTheDocument()

        expect(screen.getByText(/Spaces/i)).toBeInTheDocument()

        expect(screen.getByText(/Logout/i)).toBeInTheDocument()

        console.log('Navbar updates with user info')
    })

    test('renders correctly without user using data test', () => {
        act(() => {
            render(
                <Navbar user={undefined} />, { wrapper: BrowserRouter }
            )
        })

        expect(screen.getByText(/Home/i)).toBeInTheDocument()

        expect(screen.getByText(/Profile/i)).toBeInTheDocument()

        expect(screen.getByText(/Spaces/i)).toBeInTheDocument()

        expect(screen.getByText(/Login/i)).toBeInTheDocument()

        console.log('Navbar updates without user info')
    })
})