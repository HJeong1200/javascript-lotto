const Errors = require("./Error");
const LottoGame = require("./LottoGame");
const Message = require("./Message");
const View = require("./View");
const { Console } = require("@woowacourse/mission-utils");

class GameController {
  #game;

  constructor() {
    this.#game = new LottoGame();
  }

  start() {
    this.inputPurchaseRequest();
  }

  inputPurchaseRequest() {
    View.inputPurchase(Errors.purchaseError, (input) => {
      const count = input / 1000;
      this.#game.purchase(count);
      this.printLottosRequest(count);
    });
  }

  printLottosRequest(count) {
    View.printLottos(this.#game.getLottos(), count);
    this.inputNumbersRequest();
  }

  inputNumbersRequest() {
    View.inputNumbers(Errors.numbersError, (input) => {
      const number = input.split(",").map((el) => Number(el));
      this.#game.setNumber(number);
      this.inputBonusNumberRequest(number);
    });
  }

  inputBonusNumberRequest(number) {
    View.inputBonusNumber(Errors.bonusNumberError, number, (input) => {
      this.#game.setBonusNumber(Number(input));
      this.outputResultRequest();
    });
  }

  outputResultRequest() {
    const [results, profit] = this.#game.calcResult();
    const finalResult = Message.finalResult(results, profit);
    View.printResult(finalResult);
    Console.close();
  }
}

module.exports = GameController;
