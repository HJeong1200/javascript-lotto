const { Console } = require("@woowacourse/mission-utils");
const { Message } = require("../constants/constants");

const InputView = {
  buyLotto(errorCallback, callback) {
    Console.readLine(Message.BUYLOTTO, (input) => {
      input = Number(input);
      errorCallback(input);
      callback(input);
    });
  },

  winNumber(errorCallback, callback) {
    Console.readLine(Message.WINNUMBER, (input) => {
      input = input.split(",").map((el) => Number(el));
      errorCallback(input);
      callback(input);
    });
  },

  bonusNumber(errorCallback, callback) {
    Console.readLine(Message.BONUSNUMBER, (input) => {
      input = Number(input);
      errorCallback(input);
      callback(input);
    });
  },
};

module.exports = InputView;
