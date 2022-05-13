import { render, screen, cleanup} from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Inventory from './../pages/inventory';

afterAll(() => { 
    cleanup();
}); 

describe("Compendium", () => {

    test("Rendering the compendium title", () => {
        render(
            <MemoryRouter>
                <Inventory /> 
            </MemoryRouter>
        )
        const title = screen.getByTestId("compendium-title"); 
        expect(title.textContent).toBe("My Character")
    });

    describe("Build Character button", () => { 

        test("Rendering the compendium title", () => {
            render(
                <MemoryRouter>
                    <Inventory /> 
                </MemoryRouter>
            )
            const buildButton = screen.getByText(/build character/i); 
            expect(buildButton).toBeInTheDocument()
        });

        test("Test if the Build Character button links to the build character page", () => {
            render(
                <MemoryRouter>
                    <Inventory /> 
                </MemoryRouter>
            )
            const link = screen.getByRole("link"); 
            expect(link).toHaveAttribute("href", "/buildCharacter")
        });

    });

});