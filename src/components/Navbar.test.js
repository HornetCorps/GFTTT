import React from "react";
import Navbar from "./Navbar.js";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";

test('Nav bar should render with correct text', ()=> {
    const component = render(<MemoryRouter><Navbar/></MemoryRouter>);
    const id = component.getByTestId("Navbar")

    expect(id.textContent).toBe("Goblin Forge Table Top ToolsHomeCompendiumToolsCommunityProfileHelp")
})