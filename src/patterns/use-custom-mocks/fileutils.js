class FileUtils {
  constructor(fs) {
    this._fs = fs;
  }

  get fs() { return this._fs; }

  set fs(value) { this._fs = value; }

  deleteFile(path) {
    this.fs.unlinkSync(path);
  }
}

module.exports = FileUtils;
