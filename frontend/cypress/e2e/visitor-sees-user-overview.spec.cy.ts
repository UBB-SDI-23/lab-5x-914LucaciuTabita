function describe(visitorSeesUsersOverview: string, param2: () => void) {

}

describe('Visitor sees users overview', () => {
  it('should check that a user can see user entities on the overview', (cy) => {
    cy.visit('/users');
    cy.wait(3000);
    cy.get("table tbody tr").should('have.length.gt', 0);
  })
})
