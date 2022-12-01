const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { PRIZES } = require("./Message");

class LottoGame {
  #lottos = [];
  #money;
  #numbers;
  #bonusNumber;
  #results = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  purchase(count) {
    this.#money = count * 1000;

    while (count > 0) {
      const number = Random.pickUniqueNumbersInRange(1, 45, 6);
      number.sort((a, b) => a - b);
      const lotto = new Lotto(number);
      this.#lottos.push(lotto.getNumber());

      count--;
    }
  }

  getLottos() {
    return this.#lottos;
  }

  setNumber(number) {
    this.#numbers = number;
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }

  calcResult() {
    for (let lotto of this.#lottos) {
      const [count, isCorrectBonus] = this.checkCorrect(lotto);
      if (count === 3) this.#results[5]++;
      if (count === 4) this.#results[4]++;
      if (count === 5 && !isCorrectBonus) this.#results[3]++;
      if (count === 5 && isCorrectBonus) this.#results[2]++;
      if (count === 6) this.#results[1]++;
    }

    return this.calcProfit();
  }

  checkCorrect(lotto) {
    let correctCount = 0;
    let isCorrectBonus = false;

    for (let number of this.#numbers) {
      if (lotto.includes(number)) correctCount++;
    }

    if (lotto.includes(this.#bonusNumber)) isCorrectBonus = true;

    return [correctCount, isCorrectBonus];
  }

  calcProfit() {
    let profit = 0;

    profit += PRIZES.FIFTH * this.#results["5"];
    profit += PRIZES.FOURTH * this.#results["4"];
    profit += PRIZES.THIRD * this.#results["3"];
    profit += PRIZES.SECOND * this.#results["2"];
    profit += PRIZES.FIRST * this.#results["1"];

    profit = ((profit / this.#money) * 100).toFixed(1).toLocaleString("ko-KR");

    return [this.#results, profit];
  }
}

module.exports = LottoGame;
