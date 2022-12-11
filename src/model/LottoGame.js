const Lotto = require("./Lotto");
const { Random } = require("@woowacourse/mission-utils");

class LottoGame {
  #allLottos;
  #money;
  #winNumber;
  #bonusNumber;

  constructor(money) {
    this.#money = money;
    this.#allLottos = [];
    this.createLottos(money);
  }

  createLottos(money) {
    let count = money / 1000;

    while (count > 0) {
      const number = Random.pickUniqueNumbersInRange(1, 45, 6);
      const newLotto = new Lotto(number);
      this.#allLottos.push(newLotto.getNumber());
      count--;
    }
  }

  getAllLottos() {
    return this.#allLottos;
  }

  getMoney() {
    return this.#money;
  }

  setWinNumber(input) {
    this.#winNumber = input;
  }

  setBonusNumber(input) {
    if (this.#winNumber.includes(input)) throw new Error();
    this.#bonusNumber = input;
    console.log(this.#bonusNumber);
  }
}

module.exports = LottoGame;
