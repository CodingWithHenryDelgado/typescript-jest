/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { ConfirmModalComponent } from "../../../src/Components/spaces/ConfirmModalComponent";
import ReactDOM from "react-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

describe("Confirm modal test suite", () => {
    const closeMock = jest.fn();

    let container: HTMLDivElement;
    test("Setup test showing modal", () => {
        act(() => {
            render(
                <ConfirmModalComponent close={closeMock} content={"Some content"} show={true} />
            )
        })
    });

    test("showing modal text correctly", () => {
        act(() => {
            render(
                <ConfirmModalComponent close={closeMock} content={"Some content"} show={true} />
            )
        })
        const modalText = screen.getByText("Checking with the hotel....");
        expect(modalText!).toBeTruthy();
    });

    test("modal button action", () => {
        act(() => {
            render(
                <ConfirmModalComponent close={closeMock} content={"Some content"} show={true} />
            )
        })
        const modalButton = screen.getByRole("button");
        act(() => {
            fireEvent.click(modalButton!);
        })
        expect(closeMock).toBeCalled();
    });

    test("Setup test hiding modal", () => {
        act(() => {
            render(
                <ConfirmModalComponent close={closeMock} content={"Some content"} show={false} />
            )
        })
    });
});