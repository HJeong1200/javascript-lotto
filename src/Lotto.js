const Errors = require("./Error");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    Errors.isValidNumber(numbers);
    Errors.isDuplicate(numbers);
  }

  // TODO: 추가 기능 구현

  getNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
