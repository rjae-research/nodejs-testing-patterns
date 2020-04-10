const FileUtils = require('anti-patterns/use-mocking-frameworks/fileutils');
const sinon = require('sinon');
const fs = require('fs');

afterEach(() => {
  sinon.restore();
});

test('deleteFile must delete file', () => {
  const stub = sinon.stub(fs, 'unlinkSync');
  new FileUtils().deleteFile('.42');
  expect(stub.calledOnceWith('.42')).toBeTruthy();
});
