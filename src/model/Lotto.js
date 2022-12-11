const Errors = require("../errors/Errors");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Errors.winNumber(numbers);
  }

  // TODO: 추가 기능 구현

  getNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
