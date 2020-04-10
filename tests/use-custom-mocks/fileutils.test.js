const FileUtils = require('patterns/use-custom-mocks/fileutils');

class MockFileSystem {
  constructor() {
    this.unlinkSyncCalls = new Map();
  }

  unlinkSync(path) {
    this.unlinkSyncCalls.set(path, this.unlinkSyncCalls.has(path) ? this.unlinkSyncCalls.get(path) + 1 : 1);
  }

  calledOnceWith(value) {
    return this.unlinkSyncCalls.has(value);
  }
}

test('deleteFile must delete file', () => {
  const mock = new MockFileSystem();
  new FileUtils(mock).deleteFile('.42');
  expect(mock.calledOnceWith('.42')).toBeTruthy();
});
