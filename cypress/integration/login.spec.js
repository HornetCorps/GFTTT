cy.login = function (username, password) {
    cy.get('[type="text"]').type(username)
    cy.get('[type="password"]').type(password)
    cy.get('.login > button').click()
    cy.get('.login > :nth-child(9)').should('contain', 'testing@email.com')
}
describe('The Login Page', () => {
    it('should allow test user to log in', () => {
        cy.visit('http://localhost:3000/login')
        cy.login('testing@email.com', 'password')
    })
})