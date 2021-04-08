describe('Testing email', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('oluwamayokun.akingbade@thepfs.biz')
      .should('have.value', 'oluwamayokun.akingbade@thepfs.biz')
  })
})
