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
  },
};

module.exports = GameController;
