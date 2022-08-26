let arr = [],
    arrLenght,
    randomMinValue,
    randomMaxValue,
    arrMinElement,
    arrMinElementID,
    arrMaxElement,
    arrMaxElementID;

do {
    arrLenght = +prompt(`Input the lenght of your array! (between 2 and 10):`);
    if (arrLenght == null) {
        continue;
    } else {
        arrLenght = Math.round(arrLenght);
        arrLenght = Math.abs(arrLenght);
    }
} while (!arrLenght || arrLenght < 2 || arrLenght > 10);

do {
    randomMinValue = +prompt(`Input the lowest random number for your array! (between -10 and 10):`);
    if (randomMinValue == null) {
        continue;
    } else {
        randomMinValue = Math.round(randomMinValue);
    }
} while (!randomMinValue || randomMinValue < -10 || randomMinValue > 10);

do {
    randomMaxValue = +prompt(`Input the highest random number for your array! (between ${randomMinValue} and 50):`);
    if (randomMaxValue == null) {
        continue;
    } else {
        randomMaxValue = Math.round(randomMaxValue);
    }
} while (!randomMaxValue || randomMaxValue < randomMinValue || randomMaxValue > 50);

console.log(`Your array:`)
for (let i = 0; i < arrLenght; i++) {
    arr[i] = Math.random() * (randomMaxValue - randomMinValue) + randomMinValue;
    console.log(arr[i]);
}

arrMinElement = arr[0];
for (let i = 0; i < arrLenght; i++) {
    if (arr[i] < arrMinElement) {
        arrMinElement = arr[i];
        arrMinElementID = i;
    }
} 
console.log(`Min element of your array is: ${arrMinElement}`);

arrMaxElement = arr[0];
for (let i = 0; i < arrLenght; i++) {
    if (arr[i] > arrMaxElement) {
        arrMaxElement = arr[i];
        arrMaxElementID = i;
    }
} 
console.log(`Max element of your array is: ${arrMaxElement}`);

arr[arrMinElementID] = arrMaxElement;
arr[arrMaxElementID] = arrMinElement;
console.log(`Your NEW array (min and max elements are changed):`)
for (let i = 0; i < arrLenght; i++) {
    console.log(arr[i]);
}



