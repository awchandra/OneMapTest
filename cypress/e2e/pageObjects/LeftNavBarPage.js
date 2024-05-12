class LeftNavBarPage {
    verifyLeftNavBarPageLoaded(){
        return cy.get('#icon-menu-wrapper > div:nth-child(1) > p').should('have.text', 'Drone Query')
    }

    clickDroneQueryButton() {
        return cy.get('#droneInfo').click()
    }
    
    clickLandBettermenButton(){
        return cy.get('#lbcQueryInfoBtn').click()
    }

    clickLandQueryButton(){
        return cy.get('#LandQueryInfo').click()
    }

    clickMoreServicesButton(){
        return cy.get('#moreSvcs').click()
    }

    clickPropertyButton(){
        return cy.get('#propertyQueryBtn').click()
    }

    clickSelectMapStylesButton(){
        return cy.get('#basemapsBtn').click()
    }
    
    clickShadowAnalysisButton(){
        return cy.get('#shadowMode').click()
    }
    
    clickShowNearbyButton(){
        return cy.get('#nearbyQueryBtn').click()
    }

    clickWindowViewButton(){
        return cy.get('#view360').click()
    }

    clickAboutButton(){
        return cy.get('#aboutInfo').click()
    }

}
export default LeftNavBarPage