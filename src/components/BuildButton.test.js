import React from "react";
import {BuildButton} from "./BuildButton";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";


test('Should render the component with default styling', () => {
    const component = render(<MemoryRouter><BuildButton/></MemoryRouter>);
    const style = component.getByTestId("buildbtn-mobile")

    expect(style.className).toEqual("buildbtn-mobile")
})

// Should test for default styling
// Should be able to modify styling