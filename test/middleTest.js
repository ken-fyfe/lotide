const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle tests", () => {
  it("middle returns [] for a one element array (e.g. [3])", () => {
    const array  = [3];
    assert.isEmpty(middle(array));
  });

  it("middle returns [] for a two element array (e.g. [2, 3])", () => {
    const array  = [2, 3];
    assert.isEmpty(middle(array));
  });

  it("middle returns middle value, [2], for a three element array (e.g. [1, 2, 3])", () => {
    const array  = [1, 2, 3];
    assert.deepEqual(middle(array), [2]);
  });

  it("middle returns middle values, [2, 3], for [1, 2, 3, 4]", () => {
    const array  = [1, 2, 3, 4];
    assert.deepEqual(middle(array), [2, 3]);
  });

  it("middle returns [4], for input of [1, 2, 3, 4, 5, 6, 7]", () => {
    const array  = [1, 2, 3, 4, 5, 6, 7];
    assert.deepEqual(middle(array), [4]);
  });
});