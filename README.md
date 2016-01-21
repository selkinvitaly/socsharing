# Socsharing

Socsharing is JavaScript class for sharing in your page to the most popular social networks.

It supports the following social networks: **facebook**, **twitter**, **google plus**, **vkontakte**, **linkedin**, **odnoklassniki**, **moi mir**.

## Usage

Add the script in your page and initialize the class `Socsharing`. For example:

```html
...
  <head>
    ...
    <!-- In addition you can configure options via API. See below -->
    <meta property="og:title" content="My title">
    <meta property="og:description" content="My description">
    <meta property="og:image" content="http://example.com/post.png">
    <meta property="og:url" content="http://example.com/">
    <title>My page</title>
    <!-- If you have the default styles -->
    <link rel="stylesheet" type="text/css" href="css/default.css">
    ...
  </head>
  <body>
    <div data-socsharing-list="vk,tw,fb,ok,mail,gplus,link" class="default"></div>
    ...
    <script src="../socsharing.min.js" defer></script>
    <script src="../my-script.js" defer></script>
  </body>
</html>
```

It's example your `my-script.js`:
```js
;(function() {
  var container = document.querySelector(".default");

  new Socsharing(container);
}());
```

## Styling

This class generates into your element-container the following DOM:
```html
<ul class="socsharing__list">
  <li class="socsharing__item socsharing__item_vk">
    <a class="socsharing__link" href="..." title="share on vkontakte" target="_blank">vkontakte</a>
  </li>
  <li class="socsharing__item socsharing__item_tw">
    <a class="socsharing__link" href="..." title="share on twitter" target="_blank">twitter</a>
  </li>
  ...
</ul>
```

So you can use this styles for the styling:
```css
.container .socsharing__list {

}

.container .socsharing__item {

}

.container .socsharing__link {

}

.container .socsharing__item_vk {

}

.container .socsharing__item_tw {

}
...
```

## Social Networks

* _facebook_:
  - **id** (in `data-socsharing-list` or JS API): "fb";
  - **class** (in css): "socsharing__item_fb";
  - **text in link**: "facebook".

* _twitter_:
  - **id** (in `data-socsharing-list` or JS API): "tw";
  - **class** (in css): "socsharing__item_tw";
  - **text in link**: "twitter".

* _google plus_:
  - **id** (in `data-socsharing-list` or JS API): "gplus";
  - **class** (in css): "socsharing__item_gplus";
  - **text in link**: "google plus".

* _vkontakte_:
  - **id** (in `data-socsharing-list` or JS API): "vk";
  - **class** (in css): "socsharing__item_vk";
  - **text in link**: "vkontakte".

* _linkedin_:
  - **id** (in `data-socsharing-list` or JS API): "link";
  - **class** (in css): "socsharing__item_link";
  - **text in link**: "linkedin".

* _odnoklassniki_:
  - **id** (in `data-socsharing-list` or JS API): "ok";
  - **class** (in css): "socsharing__item_ok";
  - **text in link**: "odnoklassniki".

* _moi mir_:
  - **id** (in `data-socsharing-list` or JS API): "ok";
  - **class** (in css): "socsharing__item_ok";
  - **text in link**: "odnoklassniki".

## HTML Options

You can use the following attributes in your element-container:

* `data-socsharing-list`: The list of social networks comma separated without space.
For example: `data-socsharing-list="vk,tw"`;

* `data-socsharing-popup`: If container has this attribute then social will open in popup. Default: in tab.
For example: `data-socsharing-popup`;

* `data-socsharing-title`: The title of the shared message for all social networks into your containter. Default: page title.
For example: `data-socsharing-title="My title"`;

* `data-socsharing-img`: The link to the shared image for all social networks into your containter. Default: "".
For example: `data-socsharing-img="http://example.com/post.png"`;

* `data-socsharing-url`: The shared link for all social networks into your containter. Default: link of current page.
For example: `data-socsharing-url="http://example.com/"`;

* `data-socsharing-msg`: The shared description for all social networks into your containter. Default: "".
For example: `data-socsharing-msg="My description"`.

**Note** that you can configure options for certain social network by JS API.

## API

When you init object from the class you can pass in constructor options for certain social network:

```js
  var container = document.querySelector(".default");

  new Socsharing(container, {
    vk: {
      title: "Title for vkontakte",
      message: "Message for vkontakte"
    },
    fb: {
      title: "TItle for facebook",
      img: "https://my-site.com/post.png"
    },
    tw: {
      title: "Title for twitter",
      message: "Message for twitter",
      img: "https://my-site.com/post.png",
      url: "https://my-site.com"
    }
  });
```

**Note** that If you didn't pass option then the script will use option in your container (for example: `data-socsharing-title`).
If you didn't specify `data-socsharing-title` then the script will use [Open Graph](http://ogp.me/#metadata) meta tag in your page.
If your page hasn't the meta tag then the script will use default value.

## License

[MIT](./LICENSE)

Copyright © Selkin Vitaly, 2016
