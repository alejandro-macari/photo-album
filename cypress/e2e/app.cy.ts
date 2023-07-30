/// <reference types="Cypress" />
describe('Photo albums test', () => {
    it('should be able to navigate to an album and open a modal', () => {
      cy.visit('http://localhost:3000/')

      cy.get('[data-cy="card"]').first().click()
      cy.get("tr").first().click()

      cy.get('[data-cy=modal]').should('not.be.null')
      })
    

    it('should cache data from albums in local storage', () => {
        cy.window().its('localStorage').invoke('clear')
        cy.visit('http://localhost:3000/')
        cy.window().its('localStorage').invoke('getItem', 'albums').should('not.be.null');
    });

    it('should have empty input search after return to the hub', () => {
        cy.visit('http://localhost:3000/')

        // Type something in the search input
        cy.get('[placeholder="Search your album"]').type('a')

        // Navigate to the first podcast result
        cy.get('[data-cy=card]').first().click()

        // Return to home
        cy.get('[data-testid=homelink]').click()

        //Check that the input filter is empty
        cy.get('[placeholder="Search your album"]').should('be.empty')
    });
});