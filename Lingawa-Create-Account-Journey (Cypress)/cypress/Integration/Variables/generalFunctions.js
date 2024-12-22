//generate random numbers
let DigitRandomizer = (multiplier)=>{
    return (Math.floor(Math.random()*multiplier)) 
}

//generate Random Letters
let generateRandomLetters = (length)=>{
    let randomString = Math.random().toString(36)
    let lettersOnly = randomString.replace(/[^a-z]/gi, '')
    return lettersOnly.substring(0, length);
}

export {DigitRandomizer,generateRandomLetters};




