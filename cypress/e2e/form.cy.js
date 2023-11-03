describe('empty spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:53086/")
   const name = 'John Doe'
   cy.get('input[name="name"]').type(name)

   // Assert that the input contains the provided name
   cy.get('input[name="name"]').should('have.value', name)

   // Fill in the Email input
   const email = 'johndoe@example.com'
   cy.get('input[name="email"]').type(email)

   // Fill in the password input
   const password = 'secretpassword'
   cy.get('input[name="password"]').type(password)

   // Check the terms of service box
   cy.get('input[name="termsOfService"]').check()
   //Submit the form
   cy.get('button[type="submit"]').click()
   // Check for form validation if any input is left empty
   cy.get('.error-message').should('not.exist') // Assuming error messages have a class 'error-message'


  })
})