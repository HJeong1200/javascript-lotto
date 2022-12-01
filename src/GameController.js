const Errors = require("./Error");
const LottoGame = require("./LottoGame");
const Message = require("./Message");
const View = require("./View");
const { Console } = require("@woowacourse/mission-utils");

const GameController = {
  start() {
    const game = new LottoGame();
    this.inputPurchase(game);
  },

  inputPurchase(game) {
    View.inputPurchase(Errors.purchaseError, (input) => {
      const count = input / 1000;
      game.purchase(count);
      this.printLottosRequest(game, count);
    });
  },

  printLottosRequest(game, count) {
    View.printLottos(game.getLottos(), count);
    this.inputNumbersRequest(game);
  },

  inputNumbersRequest(game) {
    View.inputNumbers(Errors.numbersError, (input) => {
      const number = input.split(",");
      game.setNumber(number);
      this.inputBonusNumberRequest(game, number);
    });
  },

  inputBonusNumberRequest(game, number) {
    View.inputBonusNumber(Errors.bonusNumberError, number, (input) => {
      game.setBonusNumber(input);
      this.outputResultRequest(game);
    });
  },

  outputResultRequest(game) {
    const [results, profit] = game.calcResult();
    const finalResult = Message.finalResult(results, profit);
    View.printResult(finalResult);
    Console.close();
  },
};

module.exports = GameController;
