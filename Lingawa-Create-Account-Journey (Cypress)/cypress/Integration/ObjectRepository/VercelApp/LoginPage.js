import {status, createUserPage1_status, dropDownOptions,
    createUserPage2_dropDownOptions, learningReasons,
    createUserPage5_learningReasons, personalityTypes,
    createUserPage6_personalityTypes,firstBatchSelector,
    secondBatchSelector,thirdBatchSelector,firstBatch,
    secondBatch,thirdBatch,level,createUserPage8_level} from "../../Variables/PageVariables"

import {DigitRandomizer,generateRandomLetters} from "../../Variables/generalFunctions"

import {firstNameRandom,firstName,lastNameRandom,lastName,mailTypes,emailRandom, email , 
            ngnNumberStartFormat,phoneNumberRandom,phoneNumber } from "../../Variables/fakeDetailVariables"

class loginPage {

    setViewportWidth() {
        return cy.viewport(1920, 1080)
    }
 
    visitUrl() {
        return  cy.visit("https://lingawa-dev.vercel.app/login")   
    }

    acceptCookies() {
        return cy.get('button span:contains("Accept all")')    
    }

    signUpButton() {
      return  cy.get("a h3:contains('Sign Up')")
    }

}

export default loginPage