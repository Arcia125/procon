const List = require("./lib/list");
const { PRO, CON } = require("./lib/constants");

class Proconner {
  static run(args, flags) {
    const [rawCommand, ...commandArgs] = args;
    const fileName = (flags.file !== true && flags.file) || "list.json";
    const command = rawCommand && rawCommand.toUppercase();
    if (!command) {
      return Promise.reject(
        new Error("provide a command or use proconner --help to view commands")
      );
    }
    switch (command) {
      case "PRO":
        return Proconner.addToList(fileName, PRO, commandArgs.join(" "));
      case "CON":
        return Proconner.addToList(fileName, CON, commandArgs.join(" "));
      default:
        return Promise.reject(new Error("Invalid command passed " + command));
    }
  }

  static addToList(fileName, sublist, msg) {
    const list = new List(fileName);
    return list.addToList(sublist, msg);
  }
}

module.exports = Proconner;
