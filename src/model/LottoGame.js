const Lotto = require("./Lotto");
const { Random } = require("@woowacourse/mission-utils");
const { GameResult, Money } = require("../constants/constants");

class LottoGame {
  #allLottos;
  #money;
  #winNumber;
  #bonusNumber;
  #gameResult;

  constructor(money) {
    this.#money = money;
    this.#allLottos = [];
    this.#gameResult = GameResult;
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
  }

  calcResults() {
    let resultArr = [];

    for (let lotto of this.#allLottos) {
      let set = new Set(lotto);
      resultArr.push(this.countMatch(set));
    }

    this.setGameResult(resultArr);
    return this.#gameResult;
  }

  countMatch(lotto) {
    let count = 0;

    for (let number of this.#winNumber) {
      if (lotto.has(number)) count++;
    }

    if (count === 5 && lotto.has(this.#bonusNumber)) count += 10;

    return count;
  }

  setGameResult(arr) {
    for (let count of arr) {
      if (count === 3) this.#gameResult.fifth++;
      if (count === 4) this.#gameResult.fourth++;
      if (count === 5) this.#gameResult.third++;
      if (count === 15) this.#gameResult.second++;
      if (count === 6) this.#gameResult.first++;
    }
  }

  calcProfit() {
    let winMoney = 0;

    for (let rank in this.#gameResult) {
      winMoney += Money[rank] * this.#gameResult[rank];
    }

    return ((winMoney / this.#money) * 100).toFixed(1);
  }
}

module.exports = LottoGame;
