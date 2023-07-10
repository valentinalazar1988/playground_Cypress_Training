describe('File Download Test', () => {
    it('should download and verify the text file', () => {
        cy.visit('https://testpages.herokuapp.com/styled/download/download.html');

        // Check Direct Link Download button is visible and click it
        cy.get('[id="direct-download"]').should('be.visible').click();
        // Verify the download
        cy.verifyDownload('textFile.txt').should('be.true');
    });
});