/// <reference types ="cypress"/>

describe('Hillel Auto tests', () => {
    const userAndPass = `${Cypress.env('authLogin')}:${Cypress.env('authPassword')}`

    it('Update avatar', () => {
        cy.visit(`https://${userAndPass}@qauto.forstudy.space`)
        cy.login(Cypress.env('myUser'), Cypress.env('myUserPassword'))
        cy.visit(`https://${userAndPass}@qauto.forstudy.space/panel/profile`)
        cy.contains('button', 'Edit profile').click();
        cy.get('input#editProfilePhoto').selectFile('cypress/img/photo.jpeg')
        cy.intercept('PUT', 'api/users/profile').as('imgUpdate')
        cy.contains('button', 'Save').click()
        cy.get('@imgUpdate').its('response').then(res => { 
            expect(res.statusCode).eq(200)
        })

        // cy.wait(1000)
        // cy.pause()
    })
})
