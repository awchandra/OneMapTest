class LandBettermentPage {
    verifyLandBettermentPageLoaded(){
        return cy.get('#lbcQueryTitleBlock > div').should('have.text', 'LAND BETTERMENT CHARGE RATE')
    }

    clickClosePopupButton(){
        return cy.get('#LBCOptionBack').click()
    }

}
export default LandBettermentPage