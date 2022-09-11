/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { SpaceComponent } from '../../../src/Components/spaces/SpaceComponent'
import { fireEvent, screen, render, act } from "@testing-library/react";
import React from 'react';

describe('Space component test suite', () => {
    const reserveSpaceMock = jest.fn();

    function cleanUpTests() {
        jest.clearAllMocks();
    }

    describe('tests with photo URL', () => {

        beforeEach(() => {
            act(() => {
                render(
                    <SpaceComponent
                        location={'someLocation'}
                        name={'someName'}
                        reserveSpace={reserveSpaceMock}
                        spaceId={'123'}
                        photoUrl={'some.url'}
                    />)
            })
        });

        test('show image correctly', () => {
            const image = screen.getByAltText('someName');
            expect(image!).toBeInTheDocument();
        })

        test('show labels correclty', () => {
            const name = screen.getByText('someName');
            const id = screen.getByText('ID:123')
            const location = screen.getByText('someLocation')
            expect(name).toBeTruthy();
            expect(id).toBeTruthy();
            expect(location).toBeTruthy();
        })

        test('reserve spaces', () => {
            const button = screen.getByRole('button');
            act(() => {
                fireEvent.click(button!);
            })
            expect(reserveSpaceMock).toBeCalledWith('123');

        })

        afterEach(() => {
            cleanUpTests();
        })

    })

    describe('tests without photo URL', () => {

        beforeEach(() => {
            act(() => {
                render(
                    <SpaceComponent
                        location={'someLocation'}
                        name={'someName'}
                        reserveSpace={reserveSpaceMock}
                        spaceId={'123'}
                    />)
            })
        });

        test('show image correctly', () => {
            const image = screen.getByAltText('Nothing found');
            expect(image!).toBeTruthy();
        })

        afterEach(() => {
            cleanUpTests();
        })

    })

});