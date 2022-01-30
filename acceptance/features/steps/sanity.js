const { Given } = require("cucumber");
const assert = require("assert");

Given(/^Sanity$/, function () {
  assert.equal(true, true);
});
