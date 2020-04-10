const fs = require('fs');

class FileUtils {
  deleteFile(path) {
    fs.unlinkSync(path);
  }
}

module.exports = FileUtils;
