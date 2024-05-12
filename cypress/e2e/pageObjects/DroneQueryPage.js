class DroneQueryPage {
    verifyDroneQueryPageLoaded(){
        return cy.get('#droneInfoWrapper > div > div.droneQueryTitle > div').should('have.text', 'DRONE QUERY')
    }

    clickIAcceptButton() {
        return cy.get('#dronebtnAccept').click()
    }

    clickClosePopupButton(){
        return cy.get('#droneInfoWrapper > div > div.droneQueryTitle > img.dqOptionBack').click()
    }

    verifyDroneZoneLoaded(){
        return cy.get('#noFlyZone').should('have.text', 'No-Fly-Zones')
    }
    
    verifyProhibitedDroneFlyingAreasButtonEnabled(){
        return cy.get('#drone_no_fly').should('not.be.disabled')
    }

    clickPublicUAFATab(){
        return cy.get('#pubUAFA').click()
    }

    verifyPublicUAFATitleLoaded(){
        return cy.get('#pubUAFARes > div.pubUAFATitle').should('have.text', 'Public UA Flying Areas (UAFA)')
    }

    clickEncloseCommUAFAButton(){
        return cy.get('#ecUAFA').click()
    }

    verifyEncloseCommUAFATitleLoaded(){
        return cy.get('#ecUAFARes > div.commUAFATitle').should('have.text', 'Commercial UA Flying Areas (UAFA)')
    }

    clickCloseDroneZonePopup(){
        return cy.get('#droneInfoWrapper > div > div.droneQueryTitle > img.dqOptionBack').click()
    }

}
export default DroneQueryPage