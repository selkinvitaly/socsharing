"use strict";

import Service from "../classes/Service";

// list of services
let services = new Map();

services.set("vk", new Service("https://vk.com/share.php?url={url}&title={title}&description={message}&image={img}",
            "socsharing__item_vk", "vkontakte"))
        .set("tw", new Service("https://twitter.com/intent/tweet?status={title}%20{url}",
            "socsharing__item_tw", "twitter"))
        .set("fb", new Service("https://www.facebook.com/sharer.php?src=sp&u={url}",
            "socsharing__item_fb", "facebook"))
        .set("link", new Service("https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={message}",
            "socsharing__item_link", "linkedin"))
        .set("ok", new Service("https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={url}",
            "socsharing__item_ok", "odnoklassniki"))
        .set("mail", new Service("https://connect.mail.ru/share?url={url}&title={title}&description={message}",
            "socsharing__item_mail", "moi mir"))
        .set("gplus", new Service("https://plus.google.com/share?url={url}",
            "socsharing__item_gplus", "google plus"));

export default services;
