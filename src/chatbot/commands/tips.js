'use strict';

// load all command processor
const msg = require('./../utils/msg_object_handler');

function showTips(key) {
    if(key === "list") {
        showList();
    } else {

    }
}

function showList() {
    let message = {
        "type": "bubble",
        "header": msg.createComponent("box", "vertical", [msg.textSendMessage(data.header)]),
        "hero": {
            "type": "image",
            "url": data.image,
            "size": "full",
            "aspectRatio": "1:1",
            "aspectMode": "fit"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": textMessages
        },
        "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
                msg.buttonSendMessage("link", msg.uriAction("Visit website", data.link))
            ]
        }
    }
}

module.exports = {
    showTips: showTips
}