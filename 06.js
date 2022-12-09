function solve(password){
    
    let isSymbol = false;
    let isLetter = false;
    let isValidCounter = false;
    let counterDigit = 0;
    let currentPassL = password.length;

    if (currentPassL < 6 || currentPassL > 10){
        isLetter = true;
    } else {
        isLetter = false;
    }

    for (let i = 0; i < password.length; i++){
        let symbol = password[i].charCodeAt();
        if (((symbol >= 65) && (symbol <= 90) || (symbol >= 97) && (symbol <= 122) || (symbol >= 48) && (symbol <= 57))){
            isSymbol = true;
        } else {
            isSymbol = false;
            break;
        }
    }

    for (let j = 0; j < currentPassL; j++){

        let digit = currentPassL[j];
        if (digit >= 48 && digit <= 57){
            counterDigit++;
        } if (counterDigit >= 2){
            isValidCounter = true;
        }
    }
    if (isLetter && isSymbol && isValidCounter){
        console.log("Password is valid");
    } if (isSymbol){
        console.log("Password must consist only of letters and digits");
    } if (isLetter){
        console.log("Password must be between 6 and 10 characters");
    } if (isValidCounter){
        console.log("Password must have at least 2 digits");
    }


}
//solve('logIn')
solve('Pa$s$s')