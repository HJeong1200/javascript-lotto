const GameController = require("./GameController");

class App {
  play() {
    GameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
