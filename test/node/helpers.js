"use strict";

import _ from "../../src/js/lib/helpers";
import chai from "chai";

const expect = chai.expect;

describe("helpers", () => {

  describe("unique()", () => {

    it("should return array type", () => {
      expect(_.unique([])).to.be.a("array");
    });

    it("should return uniq array", () => {
      expect(_.unique(["vk", "vk", "fb"])).to.eql(["vk", "fb"]);
    });

  });

  describe("toCamelCase()", () => {

    it("should return camel case notation", () => {
      expect(_.toCamelCase("data-socsharing-img")).to.equal("socsharingImg");
    });

  });

});
