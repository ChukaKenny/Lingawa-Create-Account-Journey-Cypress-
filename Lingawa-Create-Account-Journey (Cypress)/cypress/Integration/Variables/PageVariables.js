import {DigitRandomizer,generateRandomLetters} from "../Variables/generalFunctions"
 
import {firstNameRandom,firstName,lastNameRandom,lastName,mailTypes,emailRandom, email , 
                ngnNumberStartFormat,phoneNumberRandom,phoneNumber } from "../Variables/fakeDetailVariables"


//CreateUserPage1 variables
let status = [
    {selector:'.leading-7:nth-of-type(1)'},
    {selector:'.leading-7:nth-of-type(2)'}
]
let createUserPage1_status = function() {return status[DigitRandomizer(status.length)].selector};


//CreateUserPage2 variables
let dropDownOptions = [
    {selector:"p:contains('Adult (18 and Above)')"},
    {selector:"p:contains('Teen (13-17)')"},
    {selector:"p:contains('Child (5-12)')"}
]
let createUserPage2_dropDownOptions = function() {return dropDownOptions[DigitRandomizer(dropDownOptions.length)].selector};  


//CreateUserPage5 variables
let learningReasons = [
    {selector:"p:contains('Learning my heritage language')"},
    {selector:"p:contains('Teaching my child')"},
    {selector:"p:contains('For my Nigerian partner')"},
    {selector:"p:contains('Exploring my new found roots')"}
]
let createUserPage5_learningReasons = function() {return learningReasons[DigitRandomizer(learningReasons.length)].selector};  


//CreateUserPage6 variables
let personalityTypes = [
    {selector:"button:contains('Introvert')"},
    {selector:"button:contains('Extrovert')"},
    {selector:"button:contains('Ambivert')"}

]
let createUserPage6_personalityTypes = function() {return personalityTypes[DigitRandomizer(personalityTypes.length)].selector};


//CreateUserPage7 variables
let  firstBatchSelector = function() {return firstBatch[DigitRandomizer(4)]}

let  secondBatchSelector = function() {return secondBatch[DigitRandomizer(4)]}

let  thirdBatchSelector = function() {return thirdBatch[DigitRandomizer(3)]}

let firstBatch = [1,2,3,4,5]
let secondBatch = [6,7,8,9,10]
let thirdBatch = [11,12,13,14]


//CreateUserPage8 variables
let level = [
    {selector:'[data-test="d2pBeginnerLanguageSkillCard"]'},
    {selector:'[data-test="d2pIntermediateLanguageSkillCard"]'}
]
let createUserPage8_level = function() {return level[DigitRandomizer(level.length)].selector};


export {status, createUserPage1_status, dropDownOptions,
    createUserPage2_dropDownOptions, learningReasons,
    createUserPage5_learningReasons, personalityTypes,
    createUserPage6_personalityTypes,firstBatchSelector,
    secondBatchSelector,thirdBatchSelector,firstBatch,
    secondBatch,thirdBatch,level,createUserPage8_level};