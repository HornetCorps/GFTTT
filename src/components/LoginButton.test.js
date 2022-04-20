import React from "react";
import {LoginButton} from "./LoginButton.js";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";


test('Should render the component with default styling', () => {
    const component = render(<MemoryRouter><LoginButton/></MemoryRouter>);
    const style = component.getByTestId("loginButton");

    expect(style).toBeInTheDocument();
})