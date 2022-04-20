import React from "react";
import {Button} from "./Button.js";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";


test('Should render the component with default styling', () => {
    const component = render(<MemoryRouter><Button/></MemoryRouter>);
    const style = component.getByTestId("buildbtn-mobile")

    expect(style.className).toBe("buildbtn buildbtn--primary buildbtn--medium")
})