describe('The User', () => {
    it('should be able to access the Home page', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(1) > .nav-links').click() // Home Link
        cy.url().should('equal', 'http://localhost:3000/')
    })

    it('should be able to access the inventory page', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(2) > .nav-links').click() // inventory Link
        cy.url().should('equal', 'http://localhost:3000/inventory')
    })

    it('should be able to access the tools page', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(3) > .nav-links').click() // tools Link
        cy.url().should('equal', 'http://localhost:3000/tools')
    })

    it('should be able to access the community page', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(4) > .nav-links').click() // community Link
        cy.url().should('equal', 'http://localhost:3000/community')
    })

    it('should be able to access the profile page', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(5) > .nav-links').click() // profile Link
        cy.url().should('equal', 'http://localhost:3000/profile')
    })

    it('should be able to access the Help page', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(6) > .nav-links').click() // Help Link
        cy.url().should('equal', 'http://localhost:3000/help')
    })
})