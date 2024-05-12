/// <reference types="Cypress" />
import HomePage from "../pageObjects/homePage"
import LeftNavBarPage from "../pageObjects/LeftNavBarPage"
import LandBettermentPage from "../pageObjects/LandBettermentPage"

describe('Apply Click Left Nav Bar Test Suite', function(){
    it('Should be able to click left nav bar', function(){
        const homePage = new HomePage
        const leftNavBarPage = new LeftNavBarPage
        const landBettermentPage = new LandBettermentPage
        cy.viewport(1280, 720)
        cy.visit('/')
        homePage.verifyHomePageLoaded()
        cy.wait(15000)
        homePage.clickLeftNavBarButton()
        leftNavBarPage.verifyLeftNavBarPageLoaded()
        cy.wait(5000)
        leftNavBarPage.clickLandBettermenButton()
        cy.wait(5000)
        landBettermentPage.verifyLandBettermentPageLoaded()
    })
})