const Errors = require("./Error");
const LottoGame = require("./LottoGame");
const View = require("./View");

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
      this.inputBonusNumberRequest(game);
    });
  },

  inputBonusNumberRequest(game) {
    View.inputBonusNumber(Errors.bonusNumberError, (input) => {
      game.setBonusNumber(input);
    });
  },
};

module.exports = GameController;
