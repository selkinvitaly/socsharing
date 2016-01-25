"use strict";

import _ from "../../src/js/lib/helpers";
import chai from "chai";

const expect = chai.expect;

describe("helpers", () => {

  describe("isString()", () => {

    it("should return bool type", () => {
      expect(_.isString(null)).to.be.a("boolean");
    });

    it("should return true, because It's string", () => {
      expect(_.isString("")).to.be.true;
    });

    it("should return false, because It isn't string", () => {
      expect(_.isString()).to.be.false;
    });

  });

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
