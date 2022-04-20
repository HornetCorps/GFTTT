import React from "react";
import Footer from "./Footer.js";
import HeroSection from "./HeroSection.js";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";

test('Hero container should render with correct text', ()=> {
    const component = render(<MemoryRouter><HeroSection/></MemoryRouter>);
    const id = component.getByTestId("hero-container")

    expect(id.textContent).toBe("WelcomeStart Your Adventure Now Register   Login   ")
})