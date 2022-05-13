describe('The user', () => {
    it('should be able to log in', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('[type="text"]').type('testing@email.com')
        cy.get('[type="password"]').type('password')
        cy.get('.login > button').click()
        cy.get('.login > :nth-child(11)').should('contain', 'testing@email.com')
    })

    it('should not initially have any characters', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(2) > .nav-links').click() // inventory Link
        cy.get('div.character-gallery').should('not.contain.html', '<div class="character">')
    })

    it('should be able to create and save a character', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(2) > .nav-links').click() // inventory Link
        cy.get('.build-button > [data-testid="buildbtn-mobile"] > .buildbtn').click()
        cy.get('#miscPaneEdit').click()
        cy.get('#miscPaneCharacterName').type('character')
        cy.get('#miscPanePlayerName').type('player')
        cy.get('#miscPaneClass').type('class')
        cy.get('#miscPaneRace').type('race')
        cy.get('#miscPaneLevel').type('10')
        cy.get('#miscPaneUpdate').click()
        cy.get('button.saveButton').click()
    })

    it('should have a character after creation', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(2) > .nav-links').click() // inventory Link
        cy.get('div.character-gallery').should('contain.html', '<div class="character">')
    })

    it('should not have a character after deletion', () => {
        cy.visit('http://localhost:3000/login')
        cy.get(':nth-child(2) > .nav-links').click() // inventory Link
        cy.get('.deletebtn').click({multiple:true})
        cy.get('div.character-gallery').should('not.contain.html', '<div class="character">')
    })
})
