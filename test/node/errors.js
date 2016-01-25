"use strict";

import _ from "../../src/js/lib/errors";
import chai from "chai";

const expect = chai.expect;

describe("list of errors", () => {

  it("should return object type", () => {
    expect(_).to.be.a("object");
  });

  it("should has length greater than 0", () => {
    expect(_.length).to.not.equal(0);
  });

});
