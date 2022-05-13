import { render, screen, cleanup} from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import BuildCharacter from './../pages/buildCharacter';
import { swapDown } from '../pages/AbScorePane';

afterAll(() => { 
    cleanup();
}); 

describe("Build Character page", () => {

    test("Rendering the build character title", () => {
        render(
            <MemoryRouter>
                <BuildCharacter userID={[]} inventoryData={[]} />
            </MemoryRouter>
        ); 
        const title = screen.getByText(/build a character/i); 
        expect(title).toBeInTheDocument(); 
    })

    test("Rendering the misc pane", () => {
        render(
            <MemoryRouter>
                <BuildCharacter userID={[]} inventoryData={[]} />
            </MemoryRouter>
        ); 
        const misc = screen.getByTestId("misc-pane"); 
        expect(misc).toBeInTheDocument(); 
    })

    test("Rendering the button options for build character", () => {
        render(
            <MemoryRouter>
                <BuildCharacter userID={[]} inventoryData={[]} />
            </MemoryRouter>
        ); 
        const buttons = screen.getByTestId("button-options");
        expect(buttons).toBeInTheDocument();
    })

});