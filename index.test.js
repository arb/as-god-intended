const Assert = require('assert');
require('./index');

try {
  Assert.strictEqual(Promise.prototype.then, undefined, 'Promise.then must be undefined');
  Assert.throws(() => {
    Promise.resolve().then(() => {});
  }, 'Promise.then is not a function');
  process.exit(0);
} catch (error) {
  console.error(error);
  process.exit(-1);
}