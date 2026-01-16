//to find an elment by tag name
describe('Get Element by Tag Name', () => {
  it('Finds an element by its tag name', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    //the get command is used to locate elements in the DOM
    // Get the element by tag name
    cy.get('h1').should('have.text', 'Getting Started');
  });
  // it.only can be used to run only this test
  // it.only('Finds an element by its tag name', () => {
  //   cy.visit('https://example.cypress.io/commands/getting-started');
//find elment by id
  it('Finds an element by its ID', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Get the element by ID
    cy.get('#query-btn');
  });
  //find element by class name
  it('Finds an element by its class name', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Get the element by class name
    cy.get('.query-btn');
  });
  // in case of compund class name
  it('Finds an element by its compound class name', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');    
    cy.get('.query-btn');
  });   
    // find element by attribute
  it('Finds an element by its attribute', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Get the element by attribute
    cy.get('[data-cy="query-btn"]');
  });
  //find the first element in the list of elements
  it('Finds the first element in a list', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Get the first element in the list
    cy.get('h1').first();
  });
  //find the last element in the list of elements
  it('Finds the last element in a list', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Get the last element in the list
    cy.get('li').last();
  });
//find element by multiple attributes by index
    it('Finds an element by multiple attributes and index', () => { 
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Get the element by multiple attributes and index
    cy.get('button[data-cy="query-btn"]').eq(1);
  });
  //to filter elment of list of elments
    it('Filters elements in a list', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Filter elements in the list
    cy.get('li').filter('.query-btn');
  });
  //to find child element
    it('Finds child elements', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Find child elements
    cy.get('.query-list').children();
    cy.get(".query-list").children().first();
    cy.get(".query-list").children().last();
    cy.get(".query-list").children().eq(2);
    cy.get(".query-list").children('.query-btn');
  });
  //to find the parent element
    it('Finds parent elements', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Find parent elements
    cy.get('.query-btn').parent();//direct parent
    cy.get('.query-btn').parents();//all parents array from direct to indirect (html-body-div-...)
    cy.get('.query-btn').parents('.query-list');//specific parent
  });
  //to find sibling element (brother/sister)
    it('Finds sibling elements', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Find sibling elements
    cy.get('.query-btn').siblings();
    cy.get('.query-btn').siblings('.query-list-item');
  });
  //to find elment by text content
    it('Finds an element by its text content', () => {
    cy.visit('https://example.cypress.io/commands/getting-started');
    // Get the element by its text content
    cy.contains('Getting Started');
    cy.get('button').contains('Button');
  });
  // to find any elment by playground of cypress the runner
});