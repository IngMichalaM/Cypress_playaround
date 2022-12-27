/// <reference types="Cypress"/>

describe('HW for Christmas - rahulshettyacademy', () => {
  it('Place an order and check result', () => {
    
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    
    // Add "Carrot" to the cart
    cy.get('.product:contains("Carrot")').find('button').click();
    
    // Click on the cart icon
    cy.get('.cart-icon').click();
    
    // Click on "Proceed to checkout"
    // does not work cy.contains('Proceed to checkout').click();
    cy.get('.action-block button').contains('PROCEED TO CHECKOUT').click();
    
    // Check that the "Carrot" is in the shopping cart
    cy.get('#productCartTables').contains('Carrot');
    
    // Check that there is only one item in the shopping cart
    cy.get('.quantity').should('have.text', 1)  // should('have.leng //th', 1);
    
    // Click on "Place Order"
    cy.contains('Place Order').click();
    
    // Select "Czech Republic" from the dropdown menu
    cy.get('select').select('Czech Republic');
    
    // Tick the "Agree to the Terms & Conditions" checkbox
    cy.get('input[type="checkbox"]').check();
    
    // Click on the "Proceed" button
    cy.get('button').contains('Proceed').click();
    
    // Check for the confirmation message
    // is this as assertion?  cy.contains('Thank you, your order has been placed successfully');
    cy.get('.wrapperTwo').should('contain.text', 'Thank you, your order has been placed successfully');
  });
});
