// write tests here
describe('Quotes App', () => {
    beforeEach(() => {
        // Each test needs fresh state!
        cy.visit('localhost:1234'); // CAREFUL to check which port your react app is running on!!
    })
  // Helpers to centralize CSS selectors / DOM grabbing
  const textInput = () => cy.get('input[name=text]');
  const authorInput = () => cy.get('input[name=author]');
  const foobarInput = () => cy.get('input[name=foobar]');
  const submitBtn = () => cy.get('button[id=submitBtn]');
  const cancelBtn = () => cy.get('button[id=cancelBtn]');

  it('sanity check to make sure tests work', () => {
    // 'it' is a test
    // 'expect' is an assertion
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); // strict equality === !===
    expect({}).not.to.equal({}); // strict equality === !===
    expect({}).to.eql({}); // not strict == !==
    })
    it('the proper elements are showing', () => {
        textInput().should('exist');
        foobarInput().should('not.exist');
        authorInput().should('exist');
        submitBtn().should('exist');
        cancelBtn().should('exist');
        cy.contains('Submit Quote').should('exist');
    })

    describe('Filling out the inputs and cancelling', () => {
        // describe blocks organize and groups tests together
        it('can navigate to the sit', () => {
            cy.url().should('include', 'localhost');
        })

        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('can type in the inputs', () => {
            textInput()
                .should('have.value', '')
                .type('Casey is a testing star!')
                .should('have.value', 'Casey is a testing star!')
            
            authorInput()
                .should('have.value', '')
                .type('CRHarding')
                .should('have.value', 'CRHarding')
        })

        it('the submit button enables when both inputs are filled out', () => {
            textInput().type('Lorem ipsum dolor.');
            authorInput().type('Casey');
            submitBtn().should('not.be.disabled');
        })

        it('the cancel button can reset the inputs and disable the submit button', () => {
            authorInput().type('Casey');
            textInput().type('Testing is fun!');
            cancelBtn().click();
            authorInput().should('have.value', '');
            textInput().should('have.value', '');
            submitBtn().should('be.disabled');
        })
    })

    describe('Adding a new quote', () => {
        it('can submit and delete a new quote', () => {
            textInput().type('Testing is fun!');
            authorInput().type('Casey');
            submitBtn().click();
            cy.contains('Testing is fun!');
            cy.contains('Testing is fun!').siblings('button:nth-of-type(2)').click();
            cy.contains('Testing is fun!').should('not.exist');
        })
    })

    describe('Editing an existing quote', () => {
        it('can edit a quote', () => {
          // Baking a new quote and submitting it.
          textInput().type('Lorem ipsum')
          authorInput().type('Casey')
          submitBtn().click()
          // Hitting the edit button and checking inputs.
          cy.contains('Lorem ipsum').siblings('button:nth-of-type(1)').click()
          textInput().should('have.value', 'Lorem ipsum')
          authorInput().should('have.value', 'Casey')
          // Editing the quote and submitting changes.
          textInput().type(' dolor sit')
          authorInput().type(' Harding')
          submitBtn().click()
          // Checking that the changes stuck.
          cy.contains('Lorem ipsum dolor sit (Casey Harding')
          // Hitting the delete button for the edited quote to leave state the way it was. IMPORTANT !!
          cy.contains('Lorem ipsum dolor sit (Casey Harding').next().next().click()
          cy.contains('Lorem ipsum dolor sit (Casey Harding').should('not.exist')
        })
      })


})