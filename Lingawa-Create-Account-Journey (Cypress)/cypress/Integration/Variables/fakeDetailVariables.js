import {status, createUserPage1_status, dropDownOptions,
        createUserPage2_dropDownOptions, learningReasons,
        createUserPage5_learningReasons, personalityTypes,
        createUserPage6_personalityTypes,firstBatchSelector,
        secondBatchSelector,thirdBatchSelector,firstBatch,
        secondBatch,thirdBatch,level,createUserPage8_level} from "../Variables/PageVariables"
     
import {DigitRandomizer,generateRandomLetters} from "../Variables/generalFunctions"
     
        
        //Firstname 
        let firstNameRandom = generateRandomLetters(2+DigitRandomizer(9))
        let firstName = firstNameRandom

        //Lastname
        let lastNameRandom = generateRandomLetters(2+DigitRandomizer(9))
        let lastName = lastNameRandom

        //Mail Variables
        let mailTypes = ["gmail.com","yahoo.com"]
        let emailRandom = Math.random().toString(36).substring(10)+ "@" + mailTypes[Math.floor(Math.random()*2)]
        let email = emailRandom

        //Phonenumber Variables
        let ngnNumberStartFormat = ["70","070","80","080","81","081","90","090"]
        let phoneNumberRandom = Math.floor(Math.floor(10000000 + Math.random() * 90000000))
        let phoneNumber = ngnNumberStartFormat[Math.floor(Math.random()*8)]+phoneNumberRandom

        export {firstNameRandom,firstName,lastNameRandom,lastName,mailTypes,
                emailRandom, email , ngnNumberStartFormat,phoneNumberRandom,
                phoneNumber };