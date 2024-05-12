/// <reference types="Cypress" />
import HomePage from "../pageObjects/homePage"
import LeftNavBarPage from "../pageObjects/LeftNavBarPage"
import AboutPage from "../pageObjects/AboutPage"

describe('Apply Click Left Nav Bar Test Suite', function(){
    it('Should be able to click left nav bar', function(){
        const homePage = new HomePage
        const leftNavBarPage = new LeftNavBarPage
        const aboutPage = new AboutPage
        cy.viewport(1280, 720)
        cy.visit('/')
        homePage.verifyHomePageLoaded()
        cy.wait(15000)
        homePage.clickLeftNavBarButton()
        leftNavBarPage.verifyLeftNavBarPageLoaded()
        cy.wait(5000)
        leftNavBarPage.clickAboutButton()
        cy.wait(5000)
        aboutPage.verifyAboutPageLoaded()
    })
})