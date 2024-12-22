import {status, createUserPage1_status, dropDownOptions,
    createUserPage2_dropDownOptions, learningReasons,
    createUserPage5_learningReasons, personalityTypes,
    createUserPage6_personalityTypes,firstBatchSelector,
    secondBatchSelector,thirdBatchSelector,firstBatch,
    secondBatch,thirdBatch,level,createUserPage8_level} from "../../Variables/PageVariables"

import {DigitRandomizer,generateRandomLetters} from "../../Variables/generalFunctions"

import {firstNameRandom,firstName,lastNameRandom,lastName,mailTypes,emailRandom, email , 
                ngnNumberStartFormat,phoneNumberRandom,phoneNumber } from "../../Variables/fakeDetailVariables"

class CreateUserPage2 {
 
    ageDropdownBar() {
     return  cy.get('[data-test="d2pDropdown"]')  
    }

    selectAgeGroup(){
        return cy.get( createUserPage2_dropDownOptions() ).click()
    }

   continueButton(){
    return cy.get('[data-test="d2pContinueButton"]')
   }


}

export default CreateUserPage2