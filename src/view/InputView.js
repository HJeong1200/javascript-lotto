const { Console } = require("@woowacourse/mission-utils");
const { Message } = require("../constants/constants");

const InputView = {
  buyLotto(errorCallback, callback) {
    Console.readLine(Message.buyLotto, (input) => {
      input = Number(input);
      errorCallback(input);
      callback(input);
    });
  },

  winNumber(errorCallback, callback) {
    Console.readLine(Message.winNumber, (input) => {
      input = input.split(",").map((el) => Number(el));
      errorCallback(input);
      callback(input);
    });
  },

  bonusNumber(errorCallback, callback) {
    Console.readLine(Message.bonusNumber, (input) => {
      input = Number(input);
      errorCallback(input);
      callback(input);
    });
  },
};

module.exports = InputView;
