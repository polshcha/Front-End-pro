let wordOne,
    wordTwo,
    wordThree,
    userAgree,
    hasNumber = true,
    register,
    registerCorrect = false;

const numberRegex = /\d/;

userAgree = confirm(`Tell me three most important words 💚`);

if (userAgree == true) {
do {

    wordOne = prompt(`input word one:`);
    if (wordOne !== null || wordOne !== ` `) hasNumber = numberRegex.test(wordOne);

} while (!wordOne || wordOne == null || hasNumber == true);
hasNumber = true;

do {
    register = prompt(`what register? lowercase/uppercase/capitalize?:`);

    if (register !== null){
        switch(register){
            case `lowercase`:
                wordOne = wordOne.toLocaleLowerCase();
                registerCorrect = true;
                break;
            case `uppercase`:
                wordOne = wordOne.toLocaleUpperCase();
                registerCorrect = true;
                break;
            case `capitalize`:
                let firstLetter = wordOne[0];
                wordOne = firstLetter.toLocaleUpperCase() + wordOne.slice(1).toLocaleLowerCase();
                registerCorrect = true;
                break;
            default:
                registerCorrect = false;
        }
    }

} while (registerCorrect == false || !register || register == null);
registerCorrect = false;

console.log(`~~~`);
console.log(`word one: `, wordOne);

do {

    wordTwo = prompt(`input word two:`);
    if (wordTwo !== null || wordTwo !== ` `) hasNumber = numberRegex.test(wordTwo);

} while (!wordTwo || wordTwo == null || hasNumber == true);
hasNumber = true;

do {
    register = prompt(`what register? lowercase/uppercase/capitalize?:`);

    if (register !== null){
        switch(register){
            case `lowercase`:
                wordTwo = wordTwo.toLocaleLowerCase();
                registerCorrect = true;
                break;
            case `uppercase`:
                wordTwo = wordTwo.toLocaleUpperCase();
                registerCorrect = true;
                break;
            case `capitalize`:
                let firstLetter = wordTwo[0];
                wordTwo = firstLetter.toLocaleUpperCase() + wordTwo.slice(1).toLocaleLowerCase();
                registerCorrect = true;
                break;
            default:
                registerCorrect = false;
        }
    }

} while (registerCorrect == false || !register || register == null);
registerCorrect = false;

console.log(`word two: `, wordTwo);

do {

    wordThree = prompt(`input word three:`);
    if (wordThree !== null || wordThree !== ` `) hasNumber = numberRegex.test(wordThree);

} while (!wordThree || wordThree == null || hasNumber == true);
hasNumber = true;

do {
    register = prompt(`what register? lowercase/uppercase/capitalize?:`);

    if (register !== null){
        switch(register){
            case `lowercase`:
                wordThree = wordThree.toLocaleLowerCase();
                registerCorrect = true;
                break;
            case `uppercase`:
                wordThree = wordThree.toLocaleUpperCase();
                registerCorrect = true;
                break;
            case `capitalize`:
                let firstLetter = wordThree[0];
                wordThree = firstLetter.toLocaleUpperCase() + wordThree.slice(1).toLocaleLowerCase();
                registerCorrect = true;
                break;
            default:
                registerCorrect = false;
        }
    }

} while (registerCorrect == false || !register || register == null);
registerCorrect = false;

console.log(`word three: `, wordThree);
console.log(`YOUR STRING: ${wordOne} ${wordTwo} ${wordThree}!`);
console.log(`~~~`);
}
