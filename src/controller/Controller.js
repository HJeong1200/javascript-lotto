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
    this.inputWinNumber();
  }

  inputWinNumber() {
    InputView.winNumber(Errors.winNumber, (input) => {
      this.#game.setWinNumber(input);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    InputView.bonusNumber(Errors.bonusNumber, (input) => {
      this.#game.setBonusNumber(input);
    });
  }
}

module.exports = Controller;
