/// <reference types="Cypress"/>
const loginPages = new loginPage
const CreatesUserPage0 = new CreateUserPage0
const CreatesUserPage1 = new CreateUserPage1
const CreatesUserPage2 = new CreateUserPage2
const CreatesUserPage3 = new CreateUserPage3
const CreatesUserPage5 = new CreateUserPage5
const CreatesUserPage6 = new CreateUserPage6 
const CreatesUserPage7 = new createUserPage7 
const CreatesUserPage8 = new createUserPage8
const CreatesUserPage9 = new createUserPage9
const TransitsPage = new TransitPage
const Homespage = new homePage


describe("Create User Journies",()=>{

    it("Verify new user can complete the Igbo User Journey",()=>{

        //Login Page
        loginPages.setViewportWidth()
        loginPages.visitUrl()
        loginPages.signUpButton().click()

        //Create Account Page 0
        CreatesUserPage0.igboOption().click() 
        CreatesUserPage0.submitButton().click()

        //Create Account Page 1
        cy.chooseNumberOfIndividuals()
        CreatesUserPage1.areYouOneOfThem()
        CreatesUserPage1.continueButton().click()

        //Create Account Page 2
        CreatesUserPage2.ageDropdownBar().click()
        CreatesUserPage2.selectAgeGroup()
        CreatesUserPage2.continueButton().click()

        //Create Account Page 3
        CreatesUserPage3.selectCentralIgbo()
        CreatesUserPage3.continueButton().click()

        //Create Account Page 5
        CreatesUserPage5.selectLearningReasons()
        CreatesUserPage5.continueButton().click()

        //Create Account Page 6
        CreatesUserPage6.selectPersonalityType()
        CreatesUserPage6.continueButton().click()

        //Create Account Page 7
        CreatesUserPage7.selectFirstWordThatDescribesYou().click()
        CreatesUserPage7.selectSecondWordThatDescribesYou().click()
        CreatesUserPage7.selectThirdWordThatDescribesYou().click()
        CreatesUserPage7.continueButton().click()

        //Create Account Page 8
        CreatesUserPage8.selectProficiencyLevel()
        CreatesUserPage8.continueButton().click()

        //Create Account Page 9
        CreatesUserPage9.firstName().type(firstName)
        CreatesUserPage9.lastName().type(lastName)
        CreatesUserPage9.mail().type(email)
        CreatesUserPage9.phoneNumber().type(phoneNumber)
        CreatesUserPage9.continueButton().click()

        //Homepage
        cy.wait(15000)
        Homespage.signInSuccessfulPopUp().should("be.visible")
        Homespage.myProfileIcon().trigger("mouseover").then(()=>{
        Homespage.myProfileName().should('be.visible');
        });
      
        
            
    })

  

})




import loginPage from "../ObjectRepository/VercelApp/LoginPage"
import CreateUserPage0 from "../ObjectRepository/VercelApp/CreateUser Page 0 "
import CreateUserPage1 from "../ObjectRepository/VercelApp/CreateUser Page 1"
import CreateUserPage2 from "../ObjectRepository/VercelApp/CreateUser Page 2"
import CreateUserPage3 from "../ObjectRepository/VercelApp/CreateUser Page 3"
import CreateUserPage5 from "../ObjectRepository/VercelApp/CreateUser Page 5"
import CreateUserPage6 from "../ObjectRepository/VercelApp/CreateUser Page 6"
import createUserPage7 from "../ObjectRepository/VercelApp/CreateUser Page 7"
import createUserPage8 from "../ObjectRepository/VercelApp/CreateUser Page 8"
import createUserPage9 from "../ObjectRepository/VercelApp/CreateUser Page 9"
import TransitPage from "../ObjectRepository/VercelApp/TransitPage"
import homePage from "../ObjectRepository/VercelApp/Homepage"
import {status, createUserPage1_status, dropDownOptions,createUserPage2_dropDownOptions, learningReasons,createUserPage5_learningReasons, personalityTypes,createUserPage6_personalityTypes,firstBatchSelector,secondBatchSelector,thirdBatchSelector,firstBatch,secondBatch,thirdBatch,level,createUserPage8_level} 
from "../Variables/PageVariables"
import {DigitRandomizer,generateRandomLetters} from "../Variables/generalFunctions"
import {firstNameRandom,firstName,lastNameRandom,lastName,mailTypes,emailRandom, email , ngnNumberStartFormat,phoneNumberRandom,phoneNumber } 
from "../Variables/fakeDetailVariables"