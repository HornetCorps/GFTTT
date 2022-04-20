import React from 'react'
import { Button } from './Button'
import './Footer.css'
function Footer() {
    return (
        <div data-testid="footer-container" className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Goblin Forge newsletter to recieve updates
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Email Address" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer
