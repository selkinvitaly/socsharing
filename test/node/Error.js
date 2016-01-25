"use strict";

import Err from "../../src/js/classes/Error";
import chai from "chai";

const expect = chai.expect;

describe("SocsharingError class", () => {

  it("should create object type", () => {
    let err = new Err(0);

    expect(err).to.be.a("object");
  });

  it("should instance of Error", () => {
    let err = new Err(0);

    expect(err).to.be.an.instanceof(Error);
  });

});
