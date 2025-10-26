const fs = require('fs');
const path = require('path');

const writeFile = (filepath, content) => {
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content);
}

module.exports = {
  writeFile
}
