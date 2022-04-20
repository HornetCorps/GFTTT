import React from "react";
import {RegisterButton} from "./RegisterButton.js";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";


test('Should render the component', () => {
    const component = render(<MemoryRouter><RegisterButton/></MemoryRouter>);
    const style = component.getByTestId("registerButton")

    expect(style.className).toEqual("buildbtn-mobile")
})