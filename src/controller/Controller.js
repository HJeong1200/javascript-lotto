const Errors = require("../errors/Errors");
const LottoGame = require("../model/LottoGame");
const InputView = require("../view/InputView");

class Controller {
  buyLotto() {
    InputView.buyLotto(Errors.buyLottoError, (input) => {
      console.log(input);
    });
  }
}

module.exports = Controller;
