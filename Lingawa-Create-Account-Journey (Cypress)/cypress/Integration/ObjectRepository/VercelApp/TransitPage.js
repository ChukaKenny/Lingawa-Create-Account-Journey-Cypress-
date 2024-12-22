import {status, createUserPage1_status, dropDownOptions,
    createUserPage2_dropDownOptions, learningReasons,
    createUserPage5_learningReasons, personalityTypes,
    createUserPage6_personalityTypes,firstBatchSelector,
    secondBatchSelector,thirdBatchSelector,firstBatch,
    secondBatch,thirdBatch,level,createUserPage8_level} from "../../Variables/PageVariables"

import {DigitRandomizer,generateRandomLetters} from "../../Variables/generalFunctions"
    
import {firstNameRandom,firstName,lastNameRandom,lastName,mailTypes,emailRandom, email , 
            ngnNumberStartFormat,phoneNumberRandom,phoneNumber } from "../../Variables/fakeDetailVariables"

class TransitPage {
 
    loadingHeader() {
        return cy.get('h1:contains("Finding the perfect tutor match for you...")')
    }

}

export default TransitPage