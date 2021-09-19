function findNumbersHigherThenSeven(arrayOfNumbers) {
    let numbersArray = arrayOfNumbers;
    let countOfSeven = 0;
    for(let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > 7) {
            numbersArray[i] = 7;
            countOfSeven++;
        }
    }
    return {
        updatedArray: numbersArray,
        countOfSevenNumbers: countOfSeven
    };
}

module.exports = findNumbersHigherThenSeven;