/// <reference types="cypress" />

describe('example to-do app', () => {


    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
        cy.reload()
    })

    it('displays two todo items by defauls', () => {
    // cy.get('.todo-list li').should('have.length', 2)
        cy.get('.todo-list li').should('have.length', 3)
        cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
        cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
    })

    it('can add new todo items', () => {
        const newItem = 'Feed the cat';
        cy.get('.new-todo').type(`${newItem}{enter}`)
        cy.get(".todo-list li")
        .should('have.length',3)
        .last()
        .should('have.text', newItem);
    })

    it('can check off an item as completed', () => {
        const text = 'Pay electric bill';
        cy.contains(text)
            .parent()
            .find('input[type=checkbox]')
            .check()
    })





})
