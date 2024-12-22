import {status, createUserPage1_status, dropDownOptions,
    createUserPage2_dropDownOptions, learningReasons,
    createUserPage5_learningReasons, personalityTypes,
    createUserPage6_personalityTypes,firstBatchSelector,
    secondBatchSelector,thirdBatchSelector,firstBatch,
    secondBatch,thirdBatch,level,createUserPage8_level} from "../../Variables/PageVariables"

import {DigitRandomizer,generateRandomLetters} from "../../Variables/generalFunctions"

import {firstNameRandom,firstName,lastNameRandom,lastName,mailTypes,emailRandom, email , 
                ngnNumberStartFormat,phoneNumberRandom,phoneNumber } from "../../Variables/fakeDetailVariables"

class CreateUserPage5 {
 
    continueButton() {
        return cy.get('[data-test="d2pContinueButton"]')
    }

    selectLearningReasons(){
        return cy.get( createUserPage5_learningReasons() ).click()
    }

}

export default CreateUserPage5