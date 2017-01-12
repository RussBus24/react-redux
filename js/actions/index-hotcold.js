var INPUT_NUMBER = 'INPUT_NUMBER';
var inputNumber = function(number) {
    return {
        type: INPUT_NUMBER,
        number: number
    };
};

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(number) {
    return {
        type: GUESS_NUMBER,
        number: number
    };
};

var NEW_RANDOM_NUMBER = 'NEW_RANDOM_NUMBER';
var newRandomNumber = function(number) {
    return {
        type: NEW_RANDOM_NUMBER,
        number: number
    };
};

exports.INPUT_NUMBER = INPUT_NUMBER;
exports.inputNumber = inputNumber;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.NEW_RANDOM_NUMBER = NEW_RANDOM_NUMBER;
exports.newRandomNumber = newRandomNumber;