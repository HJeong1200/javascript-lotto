const errorMessage = {
  PURCHASEERROR: "[ERROR] 1,000원 단위 숫자를 입력해 주세요.",
  VALIDNUMBERERROR: "[ERROR] 1~45 사이의 숫자를 입력해주세요.",
  DUPLICATEERROR: "[ERROR] 중복되지 않는 6개의 숫자를 입력해주세요.",
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
    console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = Number(numbers[i]);
    }

    console.log(numbers);
    Errors.isValidNumber(numbers);
    Errors.isDuplicate(numbers);
    console.log("done");
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

  bonusNumberError(number) {},
};

module.exports = Errors;
