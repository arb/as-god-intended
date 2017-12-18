require('./index');
describe('as-god-intended', () => {
  it('fixes promises so they behave the same across all code points', () => {
    expect(Promise.prototype.then).toBeUndefined();
    expect(() => {
      return Promise.resolve().then(() => {});
    }).toThrow('then is not a function');
  });
});