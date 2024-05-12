class AboutPage {
    verifyAboutPageLoaded(){
        return cy.get('#moreSvcOptionsTitleBlock > div').should('have.text', 'ABOUT')
    }

    clickFeedbackButton(){
        return cy.get('#feedback').click()
    }

    clickAbbrievationsButton(){
        return cy.get('#abbrievations').click()
    }

    clickLegendButton(){
        return cy.get('#legend').click()
    }

    clickAboutOneMapButton(){
        return cy.get('#aboutOneMap').click()
    }

    clickAPIDocumentationButton(){
        return cy.get('#newapiDocu').click()
    }

    clickOpenDataLicenseButton(){
        return cy.get('#openDataLic').click()
    }

    clickPrivacyStatementButton(){
        return cy.get('#privacyStatement').click()
    }

    clickTermsOfUseButton(){
        return cy.get('#termsOfUse').click()
    }

    clickDownloadSingaporeMapButton(){
        return cy.get('#downloadSgMap').click()
    }

    clickClosePopupButton(){
        return cy.get('#svcOptionBack_moreInfo').click()
    }

}
export default AboutPage