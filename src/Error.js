const errorMessage = {
  PURCHASEERROR: "[ERROR] 1,000원 단위 숫자를 입력해 주세요.",
};

const Errors = {
  purchaseError(input) {
    const money = Number(input);
    if (isNaN(money) || money % 1000) {
      throw new Error(errorMessage.PURCHASEERROR);
    }
  },
};

module.exports = Errors;
