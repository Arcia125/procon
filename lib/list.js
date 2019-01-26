const jsonFile = require("jsonfile");

const SUBLISTS = {
  PRO: "pro",
  CON: "con"
};

class List {
  constructor(fileName) {
    this.fileName = fileName;
  }

  getEmptyList() {
    return {
      [SUBLISTS.PRO]: [],
      [SUBLISTS.CON]: []
    };
  }

  read() {
    return new Promise((resolve, reject) => {
      jsonFile.readFile(this.fileName, function(err, obj) {
        return err ? reject(err) : resolve(obj);
      });
    });
  }

  write(obj) {
    return new Promise((resolve, reject) => {
      jsonFile.writeFile(this.fileName, obj, function(err) {
        return err ? reject(err) : resolve();
      });
    });
  }

  async addToList(sublist, msg) {
    let list;
    try {
      list = await this.read();
    } catch (e) {
      list = this.getEmptyList();
    }
    if (!list[sublist]) {
      list[sublist] = [];
    }
    list[sublist].push(msg);
    await this.write(list);
    return list;
  }
}

List.SUBLISTS = SUBLISTS;

module.exports = List;
