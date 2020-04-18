class FileUtils {
  constructor(fs) {
    this._fs = fs;
  }

  get fs() { return this._fs; }

  deleteFile(path) {
    this.fs.unlinkSync(path);
  }
}

module.exports = FileUtils;
