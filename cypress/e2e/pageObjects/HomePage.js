class HomePage {
    verifyHomePageLoaded(){
        return cy.get('#top-wrapper > a > span:nth-child(2)').should('have.text', 'A Singapore Government Agency Website')
    }

    clickLeftNavBarButton() {
        return cy.get('#icon-expand-menu').click()
    }

    fillSearchBar(queryAddress) {
        const inputQuery = cy.get('#search_property')
        inputQuery.clear()
        inputQuery.type(queryAddress)
        return this
    }

    clickFirstSuggestion(){
        return cy.get('.searchSelected > #searchresult_name').click()
    }

    verifySearchResultDisplayed(){
        return cy.get('#markerInfoTitle').should('have.text', "WHAT'S HERE SEARCH")
    }
    
    clickSearchIcon(){
        return cy.get('#search-icon').click()
    }

    clickRouteIcon(){
        return cy.get('#route-icon').click()
    }

    clickFeedbackButton(){
        return cy.get('#wog--sentiments-content > wog-tabbed-widget > div > div').click()
    }

    clickSatisfiedButton(){
        return cy.get('#wog--sentiments-content > wog-rating > div > div > div.wog--px-4 > wog-linear-scale-field > div > div.wog--flex.wog--justify-around > button:nth-child(5)').click()
    }

    verifyTellUsMorePopupAppear(){
        cy.wait(1000)
        return cy.get('#wogFeedbackHeading').should('have.text', 'Tell us more')
    }

    fillWhatYouLikeMost(reasonText) {
        const inputReason = cy.get('#dPq6t0uErr')
        inputReason.clear()
        inputReason.type(reasonText)
        return this
    }
    
    fillEmailAddress(emailAddress) {
        const inputEmail = cy.get('#n9jn3NJ5hF')
        inputEmail.clear()
        inputEmail.type(emailAddress)
        return this
    }

    clickSubmitFeedbackPopupButton(){
        return cy.get('#wogSubmitForm').click()
    }
}
export default HomePage