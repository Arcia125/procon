const jsonFile = require("jsonfile");

const { PRO, CON } = require("./constants");

class List {
  constructor(fileName) {
    this.fileName = fileName;
  }

  getEmptyList() {
    return {
      [PRO]: [],
      [CON]: []
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

  /**
   * @param {'pro' | 'con'} sublist
   * @param {string} msg
   * @returns {Promise<{pro: string[], con: string[]}>}
   */
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

module.exports = List;
