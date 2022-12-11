const Errors = require("../errors/Errors");
const LottoGame = require("../model/LottoGame");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class Controller {
  #game;

  buyLotto() {
    InputView.buyLotto(Errors.buyLottoError, (input) => {
      this.#game = new LottoGame(input);
      this.showLottos();
    });
  }

  showLottos() {
    const qty = this.#game.getMoney() / 1000;
    const allLottos = this.#game.getAllLottos();
    OutputView.showLottos(qty, allLottos);
  }
}

module.exports = Controller;
