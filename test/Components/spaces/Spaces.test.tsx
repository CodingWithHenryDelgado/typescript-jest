/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { Spaces } from "../../../src/Components/spaces/Spaces";
import { fireEvent, waitFor, screen, act, render, RenderResult } from "@testing-library/react";
import { Space, User } from "../../../src/Model/Model";
import { DataService } from './../../../src/Services/DataService';

const someSpaces: Space[] = [
    {
        location: "Paris",
        name: "Park place",
        spaceId: "1234"
    },
    {
        location: "Paris",
        name: "Park place",
        spaceId: "1235"
    },
    {
        location: "Paris",
        name: "Park place",
        spaceId: "1236"
    },
    {
        location: "Paris",
        name: "Park place",
        spaceId: "1237"
    }
];

const someUser: User = {
    userName: 'user',
    email: '1234'
}

describe("Spaces component test suite", () => {
    const dataServiceMock = {
        getSpaces: jest.fn(),
        reserveSpace: jest.fn()
    };

    //const spaceComponentSpy = jest.spyOn(SpaceComponent, 'render');

    beforeEach(() => {
        dataServiceMock.getSpaces.mockResolvedValue(someSpaces);
        act(() => {
            render(
                <Spaces dataService={(dataServiceMock as any) as DataService} user={undefined} />
            )
        })
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Renders header", () => {
        const spaces = screen.getAllByText('Find your temporary new home!');
        expect(spaces).toBeTruthy();
    });

    test("Renders all spaces", () => {
        const spaces = screen.getAllByRole('div')
    });

    // test("Correctly calls for reservation all spaces", () => {
    //     const buttons = screen.getAllByRole('button');
    //     expect(buttons!.length).toBe(4);
    //     act(() => {
    //         fireEvent.click(buttons[0]);
    //     })
    //     expect(dataServiceMock.reserveSpace).toBeCalledWith('1234');
    // });

    // test("Correctly displays modal with reservation", async () => {
    //     dataServiceMock.reserveSpace.mockResolvedValueOnce('555');
    //     const buttons = document.querySelectorAll('button');
    //     fireEvent.click(buttons[0]);
    //     expect(dataServiceMock.reserveSpace).toBeCalledWith('1234');

    //     const modalValue = await waitFor(() => document.getElementsByClassName('modalText'));
    //     expect(modalValue[0]).toHaveTextContent('You reserved the space with id 1234 and got the reservation number 555');
    // });

    // test("Correctly displays modal without reservation", async () => {
    //     dataServiceMock.reserveSpace.mockResolvedValueOnce(undefined);
    //     const buttons = document.querySelectorAll('button');
    //     fireEvent.click(buttons[0]);

    //     const modalValue = await waitFor(() => document.getElementsByClassName('modalText'));
    //     expect(modalValue[0]).toHaveTextContent(`You can't reserve the space with id 1234`);
    // });

    // test("Correctly closes modal", async () => {
    //     dataServiceMock.reserveSpace.mockResolvedValueOnce('555');
    //     const buttons = document.querySelectorAll('button');
    //     fireEvent.click(buttons[0]);

    //     const closeButton = await waitFor(() => document.getElementsByClassName('modalButton'));
    //     fireEvent.click(closeButton[0]);

    //     const modalValue = await waitFor(() => document.getElementsByClassName('modalText'));
    //     expect(modalValue[0]).toBeUndefined();
    // });

});

function mount(arg0: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>) {
    throw new Error("Function not implemented.");
}
