class SelectMapStylesPage {
    verifySelectMapStylesPageLoaded(){
        return cy.get('#mapStyleTitleBlock > div').should('have.text', 'MAP STYLES AND MODELS')
    }

    clickClosePopupButton(){
        return cy.get('#mapStyleTitleBlock > img.bmOptionBack').click()
    }

}
export default SelectMapStylesPage