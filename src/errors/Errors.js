const Errors = {
  buyLottoError(input) {
    if (input % 1000 || isNaN(input % 1000) || input <= 0) {
      throw new Error();
    }
  },

  winNumber(input) {
    if (input.length !== 6) throw new Error();
    Errors.isNumber(input);
    Errors.isDuplicateWinNumber(input);
  },

  isNumber(input) {
    for (let number of input) {
      if (isNaN(number)) throw new Error();
      if (number !== parseInt(number)) throw new Error();
      if (number < 1 || number > 45) throw new Error();
    }
  },

  isDuplicateWinNumber(input) {
    let set = new Set(input);
    if (set.size !== 6) throw new Error();
  },

  bonusNumber(input) {
    if (isNaN(input)) throw new Error();
    if (input !== parseInt(input)) throw new Error();
    if (input < 1 || input > 45) throw new Error();
  },
};

module.exports = Errors;
