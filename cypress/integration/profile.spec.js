describe('The Profile Page', () => {

    it('should allow test user to log in', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('[type="text"]').type('testing@email.com')
        cy.get('[type="password"]').type('password')
        cy.get('.login > button').click()
        cy.get('.login > :nth-child(11)').should('contain', 'testing@email.com')
    })

    it('should not initially have profile page info', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(5) > .nav-links').click() // profile Link
        cy.get('.aboutMeForm > :nth-child(2)').should('be.empty')
        cy.get('.aboutMeForm > :nth-child(4)').should('be.empty')
    })

    it('should be able to update profile', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(5) > .nav-links').click() // profile Link
        cy.get('.editButton').click()
        cy.get('.aboutMeForm > :nth-child(2)').type('Name info goes here')
        cy.get('.aboutMeForm > :nth-child(4)').type('"About Me" info goes here')
        cy.get('#Box3 > :nth-child(3)').click()
    })

    it('should have info after saving', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(5) > .nav-links').click() // profile Link
        cy.get('.aboutMeForm > :nth-child(2)').should('not.be.empty')
        cy.get('.aboutMeForm > :nth-child(4)').should('not.be.empty')
    })

    it('should be able to delete profile info', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(5) > .nav-links').click() // profile Link
        cy.get('.editButton').click()
        cy.get('.aboutMeForm > :nth-child(2)').click()
        cy.get('.aboutMeForm > :nth-child(4)').click()
        cy.get('#Box3 > :nth-child(3)').click()
    })

    it('should not have info after saving', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(5) > .nav-links').click() // profile Link
        cy.get('.aboutMeForm > :nth-child(2)').should('be.empty')
        cy.get('.aboutMeForm > :nth-child(4)').should('be.empty')
    })
})
