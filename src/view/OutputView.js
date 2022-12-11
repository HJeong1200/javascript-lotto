const { Console } = require("@woowacourse/mission-utils");
const { Message } = require("../constants/constants");

const OutputView = {
  showLottos(qty, allLottos) {
    Console.print("\n" + qty + Message.purchased);
    for (let lotto of allLottos) {
      Console.print("[" + lotto.join(", ") + "]");
    }
  },
};

module.exports = OutputView;
