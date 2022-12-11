const Errors = {
  buyLottoError(input) {
    if (input % 1000 || isNaN(input % 1000)) {
      throw new Error();
    }
  },
};

module.exports = Errors;
