/// <reference types="Cypress" />
import HomePage from "../pageObjects/homePage"

describe('Apply Search Query Test Suite', function(){
    before(function(){
        cy.fixture('homePage').then(function(data)
        {
            this.data = data
        })
      })
    it('Should be able to display search result according to Query', function(){
        const homePage = new HomePage
        cy.viewport(1280, 720)
        cy.visit('/')
        homePage.verifyHomePageLoaded()
        cy.wait(15000)
        homePage.fillSearchBar(this.data.searchQuery)
        homePage.clickFirstSuggestion()
        homePage.verifySearchResultDisplayed()
    })
})