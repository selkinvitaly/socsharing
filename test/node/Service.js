"use strict";

import Service from "../../src/js/classes/Service";
import chai from "chai";

const expect = chai.expect;

describe("Service class", () => {

  it("should create object type", () => {
    let service = new Service("url", "classname", "altText");

    expect(service).to.be.a("object");
  });

  it("should has getURL() method", () => {
    let service = new Service("url", "classname", "altText");

    expect(service.getURL()).to.equal("url");
  });

  it("should has getClass() method", () => {
    let service = new Service("url", "classname", "altText");

    expect(service.getClass()).to.equal("classname");
  });

  it("should has getAltText() method", () => {
    let service = new Service("url", "classname", "altText");

    expect(service.getAltText()).to.equal("altText");
  });

});
