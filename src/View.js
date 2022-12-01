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

  inputNumbers(errCallback, callback) {
    Console.print("");
    Console.readLine(Message.NUMBERS, (input) => {
      errCallback(input);
      callback(input);
    });
  },

  inputBonusNumber(errCallback, number, callback) {
    Console.print("");
    Console.readLine(Message.BONUSNUMBER, (input) => {
      errCallback(input, number);
      callback(input);
    });
  },

  printResult(arr) {
    Console.print("");
    for (let result of arr) {
      Console.print(result);
    }
  },
};

module.exports = View;
