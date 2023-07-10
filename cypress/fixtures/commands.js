let LOCAL_STORAGE_MEMORY = {};
Cypress.Commands.add("userLogin", () => {
    cy.fixture('tutorialsNinjaUser.json').then(userData => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
        cy.get('input[name="email"]').type(userData.email);
        cy.get('input[name="password"]').type(userData.password);
        cy.get('input[value="Login"]').click();
        Object.keys(localStorage).forEach(key => {
            LOCAL_STORAGE_MEMORY[key] = localStorage[key];
        });
    });
});
Cypress.Commands.add("restoreSession", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});

Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    return originalFn(url, options)
});
