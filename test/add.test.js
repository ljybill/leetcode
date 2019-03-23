const add = require("./src/add");
const expect = require("chai").expect;

describe("加法测试函数", function() {
  it("1 add 1 equal 2", function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});
