describe('SeleniumBase Demo Page - Visual Tests', () => {
  const visitPage = () => cy.visit('https://seleniumbase.io/demo_page');

  const percySnapshotWithCss = (name, cssOverride = '') => {
    cy.percySnapshot(name, {
      percyCSS: cssOverride
    });
  };

  beforeEach(() => {
    visitPage();
  });

  describe('Input Field and Button State', () => {
    it('Initial state of the page', () => {
      percySnapshotWithCss('Initial Page State', `
        #myTextInput { color: black !important; background: white !important; }
        #myTextarea { background: white !important; }
      `);
    });

    it('Type into text input field', () => {
      cy.get('#myTextInput').type('Visual Testing with Percy and Cypress');
      percySnapshotWithCss('Text Input Filled', `
        #myTextInput { color: black !important; background: white !important; }
      `);
    });

    it('Type into textarea field', () => {
      cy.get('#myTextarea').type('Visual testing is a type of software testing using snapshots.');
      percySnapshotWithCss('Textarea Filled', `
        #myTextarea { color: black !important; background: white !important; }
      `);
    });

    it('Add text to pre-Filled text field', () => {
      cy.get('#myTextInput2').type('Visual testing with Cypress.');
      percySnapshotWithCss('Pre-Filled Textarea Filled', `
        #myTextarea { color: black !important; background: white !important; }
      `);
    });

    it('Click the Green button', () => {
      cy.get('#myButton').click();
      percySnapshotWithCss('Clicked Regular Button', `
        #myTextarea { color: green; }
      `);
    });

    it('Click the Purple button', () => {
      cy.get('#myButton').click();
      percySnapshotWithCss('Clicked Regular Button', `
        #myTextarea { color: purple; }
      `);
    });
  });

  describe('Checkbox and Element Interaction', () => {
    it('Check the checkbox #checkBox1', () => {
      cy.get('#checkBox1').check().should('be.checked');
      percySnapshotWithCss('Checkbox1 Checked', `
        #checkBox1 { outline: 2px solid blue; }
      `);
    });

    it('Uncheck the checkbox #checkBox1', () => {
      cy.get('#checkBox1').uncheck().should('not.be.checked');
      percySnapshotWithCss('Checkbox1 Unchecked', `
        #checkBox1 { outline: 2px solid gray; }
      `);
    });

    it('Check all checkboxes (#checkBox2, #checkBox3, #checkBox4)', () => {
      cy.get('#checkBox2').check().should('be.checked');
      cy.get('#checkBox3').check().should('be.checked');
      cy.get('#checkBox4').check().should('be.checked');
      percySnapshotWithCss('All Checkboxes Checked', `
        input[type="checkbox"] { outline: 2px solid blue; }
      `);
    });

    it('Uncheck all checkboxes', () => {
      cy.get('#checkBox2').uncheck().should('not.be.checked');
      cy.get('#checkBox3').uncheck().should('not.be.checked');
      cy.get('#checkBox4').uncheck().should('not.be.checked');
      percySnapshotWithCss('All Checkboxes Unchecked', `
        input[type="checkbox"] { outline: 2px dashed gray; }
      `);
    });
  });

  describe('Progress Bar Visual Test', () => {
    it('Check progress bar appearance and label (default 50%)', () => {
      cy.get('#progressBar').should('have.attr', 'value', '50');
      percySnapshotWithCss('Progress Bar 50%', `
        #progressLabel::after {
          content: "(masked)";
        }
      `);
    });

    it('Manually set progress bar to 70% and check visual snapshot', () => {
      cy.get('#progressBar').invoke('attr', 'value', '70');
      cy.get('#progressLabel').invoke('text', 'Progress Bar: (70%)');
      percySnapshotWithCss('Progress Bar Manually Set to 70%', `
        #progressLabel { color: blue !important; }
      `);
    });

    it('Manually set progress bar to 90% and check visual snapshot', () => {
      cy.get('#progressBar').invoke('attr', 'value', '90');
      cy.get('#progressLabel').invoke('text', 'Progress Bar: (90%)');
      percySnapshotWithCss('Progress Bar Manually Set to 90%', `
        #progressLabel { color: blue !important; }
      `);
    });
  });

  describe('Radio Button Interaction', () => {
    it('Click radio button #radioButton2 and validate selection', () => {
      cy.get('#radioButton2').click().should('be.checked');

      percySnapshotWithCss('RadioButton2 Selected', `
        #radioButton2 { outline: 2px solid blue; }
      `);
    });
  });

  describe('Dropdown Selection Visual Test', () => {
    it('Change dropdown to 100% and take visual snapshot', () => {
      cy.get('#mySelect').select('100%');
      cy.percySnapshot('Dropdown Set to 100%', {
        percyCSS: `
          #mySelect { background-color: white !important; color: black !important; }
        `
      });
    });
  });
});