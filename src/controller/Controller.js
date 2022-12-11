const Errors = require("../errors/Errors");
const LottoGame = require("../model/LottoGame");
const InputView = require("../view/InputView");

class Controller {
  #game;

  buyLotto() {
    InputView.buyLotto(Errors.buyLottoError, (input) => {
      this.#game = new LottoGame(input);
      console.log(this.#game.getAllLottos());
      console.log(this.#game.getMoney());
    });
  }
}

module.exports = Controller;
