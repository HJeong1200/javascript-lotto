const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");

const View = {
  inputPurchase(errCallback, callback) {
    Console.readLine(Message.PURCHASE, (input) => {
      errCallback(input);
      callback(input);
    });
  },
};

module.exports = View;
