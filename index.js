const List = require("./lib/list");

class Proconner {
  static run(args, flags) {
    const [command, ...commandArgs] = args;
    const fileName = (flags.file !== true && flags.file) || "list.json";
    switch (command.toUpperCase()) {
      case "PRO":
        return Proconner.addToList(
          fileName,
          List.SUBLISTS.PRO,
          commandArgs.join(" ")
        );
      case "CON":
        return Proconner.addToList(
          fileName,
          List.SUBLISTS.CON,
          commandArgs.join(" ")
        );
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
