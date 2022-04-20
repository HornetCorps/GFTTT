import React from "react";
import Footer from "./Footer.js";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";

test('Footer should render with correct text', ()=> {
    const component = render(<MemoryRouter><Footer/></MemoryRouter>);
    const id = component.getByTestId("footer-container")

    expect(id.textContent).toBe("Join the Goblin Forge newsletter to recieve updates" +
        "You can unsubscribe at any time.Subscribe")
})