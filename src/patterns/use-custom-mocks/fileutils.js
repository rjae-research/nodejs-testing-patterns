class FileUtils {
  constructor(fs) {
    this.fs = fs;
  }

  deleteFile(path) {
    this.fs.unlinkSync(path);
  }
}

module.exports = FileUtils;
