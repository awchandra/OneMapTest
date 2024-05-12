class LandQueryPage {
    verifyLandQueryPageLoaded(){
        return cy.get('#landinfowrapper > div.landinfo-logo > span').should('have.text', 'LAND QUERY')
    }

    clickLandQueryTab(){
        return cy.get('#landinfo-query').click()
    }

    clickTenureQueryTab(){
        return cy.get('#landinfo-tenure').click()
    }

    clickClosePopupButton(){
        return cy.get('#landinfowrapper > div.landinfo-logo > img.lqOptionBack').click()
    }

}
export default LandQueryPage