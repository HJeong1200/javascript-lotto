const { Console } = require("@woowacourse/mission-utils");
const { Message } = require("../constants/constants");

const InputView = {
  buyLotto(errorCallback, callback) {
    Console.readLine(Message.buyLottoMessage, (input) => {
      input = Number(input);
      errorCallback(input);
      callback(input);
    });
  },
};

module.exports = InputView;
