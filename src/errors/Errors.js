const { ErrorMessage } = require("../constants/constants");

const Errors = {
  buyLottoError(input) {
    if (input % 1000 || isNaN(input % 1000) || input <= 0) {
      throw new Error(ErrorMessage.BUYLOTTO);
    }
  },

  winNumber(input) {
    if (input.length !== 6) throw new Error(ErrorMessage.LOTTOLENGTH);
    Errors.isNumber(input);
    Errors.isDuplicateWinNumber(input);
  },

  isNumber(input) {
    for (let number of input) {
      if (
        isNaN(number) ||
        number !== parseInt(number) ||
        number < 1 ||
        number > 45
      )
        throw new Error(ErrorMessage.VALIDNUMBER);
    }
  },

  isDuplicateWinNumber(input) {
    let set = new Set(input);
    if (set.size !== 6) throw new Error(ErrorMessage.LOTTOLENGTH);
  },

  bonusNumber(input) {
    if (isNaN(input) || input !== parseInt(input) || input < 1 || input > 45)
      throw new Error(ErrorMessage.VALIDNUMBER);
  },
};

module.exports = Errors;
