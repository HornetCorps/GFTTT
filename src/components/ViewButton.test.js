import React from "react";
import {ViewButton} from "./ViewButton.js";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";


test('Should render the component', () => {
    const component = render(<MemoryRouter><ViewButton/></MemoryRouter>);
    const style = component.getByTestId("viewButton")

    expect(style.className).toEqual("viewbtn-mobile")
})