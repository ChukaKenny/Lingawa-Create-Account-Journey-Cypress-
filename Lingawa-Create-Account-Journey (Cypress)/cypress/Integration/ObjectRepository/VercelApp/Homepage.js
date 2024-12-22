import {status, createUserPage1_status, dropDownOptions,
    createUserPage2_dropDownOptions, learningReasons,
    createUserPage5_learningReasons, personalityTypes,
    createUserPage6_personalityTypes,firstBatchSelector,
    secondBatchSelector,thirdBatchSelector,firstBatch,
    secondBatch,thirdBatch,level,createUserPage8_level} from "../../Variables/PageVariables"

import {DigitRandomizer,generateRandomLetters} from "../../Variables/generalFunctions"

import {firstNameRandom,firstName,lastNameRandom,lastName,mailTypes,emailRandom, email , 
                ngnNumberStartFormat,phoneNumberRandom,phoneNumber } from "../../Variables/fakeDetailVariables"

class homePage {
 
    signInSuccessfulPopUp() {
        return cy.get("div:contains('Signup')")
    }

    myProfileIcon() {
        return cy.get('[data-profileid="profile-id"]')
    }

    myProfileName() {
        return cy.get('h2:contains("Hi, ' + firstName + '")')
    }
}

export default homePage