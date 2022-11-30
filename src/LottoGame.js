const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoGame {
  #lottos = [];
  #numbers;
  #bonusNumber;

  purchase(count) {
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
}

module.exports = LottoGame;
