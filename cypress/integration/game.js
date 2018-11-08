describe('can visit site and play game', ()=>{
    it('can vist the site', () => {
        cy.visit('www.stackygame.com')
        cy.title().should('include', 'Stacky')
      })
    it('can insert a name and click play', ()=>{
        cy.get('.usernameInput').type('test')
        cy.get('.fas').click()
    })
    it('can go left and right', ()=>{
        cy.get('.container').type('{leftarrow}')
        cy.get('.container').type('{rightarrow}', {delay: 1000})
    })
    it('can pause and go to the leaderboard', ()=>{
        cy.get('.pause').click()
        cy.get('a > .rls').click()
        cy.get('.fas').click()
    })
    it('can pause and delete account', ()=>{
        cy.get('.pause').click()
        cy.get('.deleteUserBtn').click()
        cy.get('.swal2-confirm').click()
        cy.get('.swal2-confirm').click()
    })
  
})