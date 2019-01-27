const List = require("./lib/list");
const { PRO, CON } = require("./lib/constants");

class Proconner {
  static run(args, flags) {
    const [command, ...commandArgs] = args;
    const fileName = (flags.file !== true && flags.file) || "list.json";
    switch (command.toUppercase()) {
      case "PRO":
        return Proconner.addToList(fileName, PRO, commandArgs.join(" "));
      case "CON":
        return Proconner.addToList(fileName, CON, commandArgs.join(" "));
      default:
        return Promise.reject();
    }
  }

  static addToList(fileName, sublist, msg) {
    const list = new List(fileName);
    return list.addToList(sublist, msg);
  }
}

module.exports = Proconner;
