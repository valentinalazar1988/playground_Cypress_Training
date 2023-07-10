describe('Dropdowns with select', () => {

    beforeEach('before each', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('[id="dropdowm-menu-1"]').should('be.visible');
    })
    it('Selects SQL from the first Dropdown', () => {
        cy.get('[id="dropdowm-menu-1"]').select('sql');
        cy.get('[id="dropdowm-menu-1"]').contains('SQL');
    });

    it('Selects JAVA from the first Dropdown', () => {
        cy.get('[id="dropdowm-menu-1"]').select('java');
        cy.get('[id="dropdowm-menu-1"]').contains('JAVA');
    });

    it('Selects C# from the first Dropdown', () => {
        cy.get('[id="dropdowm-menu-1"]').select('c#');
        cy.get('[id="dropdowm-menu-1"]').contains('C#');
    });

    it('Selects Python from the first Dropdown', () => {
        cy.get('[id="dropdowm-menu-1"]').select('python');
        cy.get('[id="dropdowm-menu-1"]').contains('Python');
    });
});