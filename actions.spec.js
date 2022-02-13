/// <reference types='cypress'/>

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('.type() - type into a DOM element', () => {
        cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')

        .type('{selectall}{backspace}{uparrow}{downarrow}')
        .type('{del}{selectall}{backspace}')

        .type('{alt}{option}')
        .type('{ctrl}{control}')
        .type('{meta}{command}{cmd}')
        .type('{shift}')

        //無効性になっているかの確認
        //force:trueの意味があまりよくわかってないかも
       cy.get('.action-disabled')
        .type('disabled error cheking',{force: true})
        .should('have.value', 'disabled error cheking')
    })

    it('.focus() -focus on a DOM element', () => {
        cy.get('.action-focus').focus()
        .should('have.class', 'focus')
        .prev().should('have.attr', 'style', 'color: orange;')

    })

    it('.blur() - blur off a DOM element',　 () => {

        //透かし文字が消えていることの確認

        cy.get('.action-clear').type('Clear this text')
         .should('have.value', 'Clear this text')
         .clear()
         .should('have.value', '')
    })

    it('.submit() - sumbmit a form', () => {
        cy.get('.action-form')
         .find('[type="text"]').type('HALFOFF')

        cy.get('.action-form').submit()
         .next().should('contain', 'Your form has been submitted')
    })








    })

