import React from "react";
import ImportButton from "./ImportButton.js";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test('Should render the component', () => {
    const dataInput = {name: "test"}
    const component = render(<ImportButton data={dataInput}>Test</ImportButton>);
    const style = component.getByTestId("importButton");

    expect(style).toBeInTheDocument();
})