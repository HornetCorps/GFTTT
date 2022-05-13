import { render, screen, cleanup, within} from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from "./../Navbar";

afterAll(() => { 
    cleanup();
}); 

describe("Navigation Menu", () => {

    test("Rendering the title", () => { 
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        const title = screen.getByTestId("title");
        expect(title.textContent).toBe("Goblin Forge Table Top Tools")
    });

    test("Rendering the Navigation Menu", ()=> {
        const { getByTestId } = render(<MemoryRouter><Navbar /></MemoryRouter>);
        const navMenu = getByTestId('nav-menu');
        const navLinks = within(navMenu).getAllByTestId('nav-links');
        expect(navLinks.length).toBe(6)
    });

    describe("Testing the links of each menu", () => {

        test("Test if the Home button navigate to the home page", () => { 
            render(
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            ); 
            const home = screen.getByText(/home/i);
            expect(home).toHaveAttribute("href", "/")
        });

        test("Test if the Compendium button navigate to the compendium page", () => { 
            render(
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            ); 
            const compendium = screen.getByText(/compendium/i);
            expect(compendium).toHaveAttribute("href", "/inventory")
        });

        test("Test if the Tools button navigate to the tools page", () => { 
            render(
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            ); 
            const tools = screen.getByText("Tools");
            expect(tools).toHaveAttribute("href", "/tools")
        });

        test("Test if the Community button navigate to the community page", () => { 
            render(
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            ); 
            const community = screen.getByText(/community/i);
            expect(community).toHaveAttribute("href", "/community")
        });

        test("Test if the Profile button navigate to the profile page", () => { 
            render(
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            ); 
            const profile = screen.getByText(/profile/i);
            expect(profile).toHaveAttribute("href", "/profile")
        });

        test("Test if the Help button navigate to the help page", () => { 
            render(
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            ); 
            const help = screen.getByText(/help/i);
            expect(help).toHaveAttribute("href", "/help")
        });

    })
});