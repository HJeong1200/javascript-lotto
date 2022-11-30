const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");

const View = {
  inputPurchase(errCallback, callback) {
    Console.readLine(Message.PURCHASE, (input) => {
      errCallback(input);
      callback(input);
    });
  },

  printLottos(lottos, count) {
    Console.print("");
    Console.print(Message.printQty(count));
    for (let lotto of lottos) {
      Console.print(lotto);
    }
  },
};

module.exports = View;
