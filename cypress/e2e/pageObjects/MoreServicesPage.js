class MoreServicesPage {
    verifyMoreServicesPageLoaded(){
        return cy.get('#moreSvcOptionsTitleBlock > div').should('have.text', 'MORE SERVICES')
    }

    clickBusExplorerButton(){
        return cy.get('#busExplorer').click()
    }

    clickStatePropertiesButton(){
        return cy.get('#stateProp').click()
    }

    clickPopulationQueryButton(){
        return cy.get('#popQuery').click()
    }

    clickTrafficQueryButton(){
        return cy.get('#trafficQuery').click()
    }

    clickHistoricalMapButton(){
        return cy.get('#historicalMap').click()
    }

    clickClosePopupButton(){
        return cy.get('#svcOptionBack_svcApps').click()
    }

}
export default MoreServicesPage