class PropertyPage {
    verifyPropertyPageLoaded(){
        return cy.get('#propertyInfoWrapper > div > div.moduleTitleBlock > div').should('have.text', 'PROPERTY PRICE')
    }

    clickResaleTab(){
        return cy.get('#resaleBtn').click()
    }

    clickRentalTab(){
        return cy.get('#rentalBtn').click()
    }

    clickClosePopupButton(){
        return cy.get('#propertyInfoWrapper > div > div.moduleTitleBlock > img.propertyInfoOptionBack.back').click()
    }

}
export default PropertyPage