"use strict";

import _ from "../../src/js/lib/services";
import chai from "chai";

const expect = chai.expect;

describe("list of services", () => {

  it("should return object type", () => {
    expect(_).to.be.a("object");
  });

  it("should has 7 services", () => {
    let count = 0;

    for (let key in _) {
      if (!_[key]) {
        continue;
      }

      count++;
    }

    expect(count).to.equal(7);
  });

});
