import React from 'react';
import { Counter } from '@/components/Counter/Counter';

describe('Counter.cy.tsx', () => {
    beforeEach(() => {
        cy.mount(<Counter />);
    });

    it('Component should render correctly', () => {
        // select component root element by class name
        // assert the component exists
        cy.get('.rsa-counter').should('exist');
    });

    it('Counter value should decrement when decrement button is clicked', () => {
        // select the button element and click it
        cy.get('[data-testid="decrement"]').click();
        // select the counter element and assert the expected result after clicking on the button
        cy.get('[data-testid="counter"]').should('have.text', '-1');
    });

    it('Counter value should increment when increment button is clicked', () => {
        // select the button element and click it
        cy.get('[data-testid="increment"]').click();
        // select the counter element and assert the expected result after clicking on the button
        cy.get('[data-testid="counter"]').should('have.text', '1');
    });
});
