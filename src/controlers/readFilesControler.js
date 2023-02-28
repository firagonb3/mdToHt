const fs = require('fs');

const regex = /.+\.(txt|md)$/i;

function readFile(path) {
  if (regex.test(path)) {
    return fs.readFileSync(path, 'utf-8')
  }
}

module.exports = {
  readFile
};