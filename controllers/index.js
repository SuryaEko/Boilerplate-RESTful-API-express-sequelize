const fs = require("fs");
const path = require("path");

const Controller = {};

const basename = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const _pathFile = path.join(__dirname, file);
    const _conName = path.basename(_pathFile, ".js");
    Controller[_conName] = require(_pathFile);
  });

module.exports = Controller;
