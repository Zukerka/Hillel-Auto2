Cypress.Commands.add('login', (email, password) => {
    cy.request('POST', '/api/auth/signin', {
            "email": email,
            "password": password,
            "remember": false
        })
 })