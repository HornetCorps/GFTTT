import { render, screen, cleanup} from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Home from './../pages/home';
import { RegisterButton } from './../RegisterButton';
import { LoginButton } from './../LoginButton';

afterAll(() => { 
    cleanup();
}); 

describe("Homepage components rendering", () => {

    test("Rendering 'Welcome'", () => {
        render(
            <MemoryRouter>
                <Home /> 
            </MemoryRouter>
        ); 
        const header = screen.getByRole("first-header");
        expect(header.textContent).toBe("Welcome");
    }); 

    test("Rendering 'Start Your Adventure Now", () => {
        render(
            <MemoryRouter>
                <Home /> 
            </MemoryRouter>
        ); 
        const header = screen.getByRole("second-header");
        expect(header.textContent).toBe("Start Your Adventure Now");
    }); 

    describe("Register button", () => {

        test("Rendering the register button", () => {
            render(
                <MemoryRouter>
                    <RegisterButton>Register</RegisterButton>
                </MemoryRouter>
            ); 
            const button = screen.getByText(/register/i); 
            expect(button).toBeInTheDocument()
        });
    
        test("Test if the register button navigate to the register page", () => { 
            render(
                <MemoryRouter>
                    <RegisterButton>Register</RegisterButton>
                </MemoryRouter>
            ); 
            const regButton = screen.getByRole("link");
            expect(regButton).toHaveAttribute("href", "/register")
        });
    });

    describe("Login button", () => {

        test("Rendering the login button", () => {
            render(
                <MemoryRouter>
                    <LoginButton>Login</LoginButton>
                </MemoryRouter>
            );
            const button = screen.getByText(/login/i);
            expect(button).toBeInTheDocument()
        });
    
        test("Test if the login button navigate to the login page", () => { 
            render(
                <MemoryRouter>
                    <LoginButton>Login</LoginButton>
                </MemoryRouter>
            ); 
            const logButton = screen.getByRole("link");
            expect(logButton).toHaveAttribute("href", "/login")
        });
    });

});