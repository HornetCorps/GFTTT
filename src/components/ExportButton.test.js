import React from "react";
import ExportButton from "./ExportButton.js";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test('Should render the component', () => {
    const dataInput = {name: "test"}
    const component = render(<ExportButton data={dataInput}>Test</ExportButton>);
    const style = component.getByTestId("exportButton");

    expect(style).toBeInTheDocument();
})