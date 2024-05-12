/// <reference types="Cypress" />
import HomePage from "../pageObjects/homePage"
import LeftNavBarPage from "../pageObjects/LeftNavBarPage"

describe('Apply Click Left Nav Bar Test Suite', function(){
    it('Should be able to click left nav bar', function(){
        const homePage = new HomePage
        const leftNavBarPage = new LeftNavBarPage
        cy.viewport(1280, 720)
        cy.visit('/')
        homePage.verifyHomePageLoaded()
        cy.wait(15000)
        homePage.clickLeftNavBarButton()
        leftNavBarPage.verifyLeftNavBarPageLoaded()
    })
})