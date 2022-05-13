import { render, screen, cleanup} from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Footer from './../Footer';

test('Rendering the footer', ()=> {
    render(
        <MemoryRouter>
            <Footer/>
        </MemoryRouter>
    );
    const footer = screen.getByTestId("footer-container")
    expect(footer.textContent).toBe("Join the Goblin Forge newsletter to recieve updates" +
        "You can unsubscribe at any time.Subscribe")
}); 
