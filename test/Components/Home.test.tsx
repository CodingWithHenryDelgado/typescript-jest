/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../../src/Components/Home';
import { act } from 'react-dom/test-utils';

describe('home test suite', () => {
    test('renders component correctly', () => {
        act(() => {
            render(
                <Home />
            )
        })
        const helloText = screen.getByText('Welcome to your temp home!');
        expect(helloText).toBeInTheDocument();
    })
});