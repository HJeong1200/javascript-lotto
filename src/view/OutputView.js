const { Console } = require("@woowacourse/mission-utils");
const { Message, MyResult, Profit } = require("../constants/constants");

const OutputView = {
  showLottos(qty, allLottos) {
    Console.print("\n" + qty + Message.PURCHASED);
    for (let lotto of allLottos) {
      Console.print("[" + lotto.join(", ") + "]");
    }
  },

  result(gameResult, profit) {
    Console.print(Message.RESULT);
    Console.print(MyResult(gameResult));
    Console.print(Profit(profit));
    Console.close();
  },
};

module.exports = OutputView;
