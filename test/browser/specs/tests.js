var wrap  = document.querySelector(".default");
var share = new Socsharing(wrap);

describe("Static methods", function() {

  it("should has static getter ATTR_SERVICES", function() {
    expect(Socsharing.ATTR_SERVICES).to.be.ok;
  });

  it("should has static getter ATTR_SERVICES", function() {
    expect(Socsharing.ATTR_SERVICES).to.be.ok;
  });

  it("should has static getter ATTR_POPUP", function() {
    expect(Socsharing.ATTR_POPUP).to.be.ok;
  });

  it("should has static getter ATTR_TITLE", function() {
    expect(Socsharing.ATTR_TITLE).to.be.ok;
  });

  it("should has static getter ATTR_IMG", function() {
    expect(Socsharing.ATTR_IMG).to.be.ok;
  });

  it("should has static getter ATTR_MSG", function() {
    expect(Socsharing.ATTR_MSG).to.be.ok;
  });

  it("should has static getter ATTR_URL", function() {
    expect(Socsharing.ATTR_URL).to.be.ok;
  });

  it("should has static getter CLASS_UL", function() {
    expect(Socsharing.CLASS_UL).to.be.ok;
  });

  it("should has static getter CLASS_LI", function() {
    expect(Socsharing.CLASS_LI).to.be.ok;
  });

  it("should has static getter CLASS_LINK", function() {
    expect(Socsharing.CLASS_LINK).to.be.ok;
  });

  it("should has static getter TITLE_LINK", function() {
    expect(Socsharing.TITLE_LINK).to.be.ok;
  });

  it("should has static getter POPUP_CFG", function() {
    var cfg = Socsharing.POPUP_CFG;

    expect(cfg).to.be.ok;
    expect(cfg).to.be.a("object");
  });

});

describe("Parsed methods", function() {

  it("_parsePopup() should return true", function() {
    expect(share._parsePopup(wrap)).to.equal(true);
  });

  it("_parseTitle() should return title from OG meta-tag", function() {
    var meta = document.querySelector("meta[property=\"og:title\"]");

    expect(share._parseTitle(wrap)).to.equal(meta.getAttribute("content"));
  });

  it("_parseURL() should return URL from OG meta-tag", function() {
    var meta = document.querySelector("meta[property=\"og:url\"]");

    expect(share._parseURL(wrap)).to.equal(meta.getAttribute("content"));
  });

  it("_parseMessage() should return description from OG meta-tag", function() {
    var meta = document.querySelector("meta[property=\"og:description\"]");

    expect(share._parseMessage(wrap)).to.equal(meta.getAttribute("content"));
  });

  it("_parseImage() should return path of image from OG meta-tag", function() {
    var meta = document.querySelector("meta[property=\"og:image\"]");

    expect(share._parseImage(wrap)).to.equal(meta.getAttribute("content"));
  });

  it("_parseServices() should return list services", function() {
    var list = wrap.getAttribute("data-socsharing-list").split(",");

    expect(share._parseServices(wrap)).to.eql(list);
  });

});

describe("Getting methods", function() {

  it("_getTitle() should return title", function() {
    var opts = {
      tw: {
        title: "test"
      }
    };

    expect(share._getTitle("tw", opts)).to.eql(opts.tw.title);
  });

  it("_getURL() should return URL", function() {
    var opts = {
      tw: {
        url: "test"
      }
    };

    expect(share._getURL("tw", opts)).to.eql(opts.tw.url);
  });

  it("_getMessage() should return description", function() {
    var opts = {
      tw: {
        message: "test"
      }
    };

    expect(share._getMessage("tw", opts)).to.eql(opts.tw.message);
  });

  it("_getImage() should return path of image", function() {
    var opts = {
      tw: {
        img: "test"
      }
    };

    expect(share._getImage("tw", opts)).to.eql(opts.tw.img);
  });

  it("_template() should return encoded path", function() {
    var str = "https://example.com/?id={test}";
    var replacement = "привет, мир!";
    var result = str.replace(new RegExp("{test}"), encodeURIComponent(replacement));

    expect(share._template(str, "test", replacement)).to.eql(result);
  });

});

describe("DOM", function() {

  it("UL list should instance of Element", function() {
    var ul = wrap.querySelector("ul");

    expect(ul).to.be.an.instanceof(Element);
  });

});
