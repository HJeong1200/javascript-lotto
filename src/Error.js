const errorMessage = {
  PURCHASEERROR: "[ERROR] 1,000원 단위 숫자를 입력해 주세요.",
  VALIDNUMBERERROR: "[ERROR] 1~45 사이의 숫자를 입력해주세요.",
  DUPLICATEERROR: "[ERROR] 중복되지 않는 6개의 숫자를 입력해주세요.",
  BONUSNUMBERERROR: "[ERROR] 1~45 사이의 숫자를 입력해주세요.",
  DUPLICATEBONUSERROR:
    "[ERROR] 입력하신 로또 번호와 중복되지 않는 숫자를 입력해주세요.",
};

const Errors = {
  purchaseError(input) {
    const money = Number(input);
    if (isNaN(money) || money % 1000) {
      throw new Error(errorMessage.PURCHASEERROR);
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
        throw new Error(errorMessage.VALIDNUMBERERROR);
      }
    }
  },

  isDuplicate(arr) {
    const numberSet = new Set(arr);

    if (numberSet.size !== 6) throw new Error(errorMessage.DUPLICATEERROR);
  },

  bonusNumberError(number, arr) {
    const bonusNumber = parseInt(number);
    if (
      isNaN(bonusNumber) ||
      bonusNumber !== Number(number) ||
      number < 1 ||
      number > 45
    ) {
      throw new Error(errorMessage.BONUSNUMBERERROR);
    }
    if (arr.includes(number)) throw new Error(errorMessage.DUPLICATEBONUSERROR);
  },
};

module.exports = Errors;
