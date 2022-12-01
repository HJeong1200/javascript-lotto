const { ERROR } = require("./Message");

const Errors = {
  purchaseError(input) {
    const money = Number(input);
    if (money === 0) throw new Error();
    if (isNaN(money) || money % 1000) {
      throw new Error(ERROR.PURCHASE);
    }
  },

  numbersError(input) {
    const numbers = input.split(",");

    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = Number(numbers[i]);
    }

    Errors.isValidNumber(numbers);
    Errors.isDuplicate(numbers);
  },

  isValidNumber(arr) {
    for (let el of arr) {
      const number = parseInt(el);

      if (isNaN(number) || number !== el || number < 1 || number > 45) {
        throw new Error(ERROR.VALIDNUMBER);
      }
    }
  },

  isDuplicate(arr) {
    const numberSet = new Set(arr);

    if (numberSet.size !== 6) throw new Error(ERROR.DUPLICATE);
  },

  bonusNumberError(number, arr) {
    const bonusNumber = parseInt(number);
    if (
      isNaN(bonusNumber) ||
      bonusNumber !== Number(number) ||
      number < 1 ||
      number > 45
    ) {
      throw new Error(ERROR.BONUSNUMBER);
    }
    if (arr.includes(number)) throw new Error(ERROR.DUPLICATEBONUS);
  },
};

module.exports = Errors;
