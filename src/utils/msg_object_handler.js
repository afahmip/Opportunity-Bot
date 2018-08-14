'use strict';

function textSendMessage(text) {
    return {
        "type": "text",
        "text": text
    }
}

function imageSendMessage(originalContentUrl, previewImageUrl) {
    return {
        "type": "image",
        "originalContentUrl": originalContentUrl,
        "previewImageUrl": previewImageUrl
    }
}

function flexSendMessage(header, textMessages) {
    return {  
        "type": "bubble",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                textSendMessage(header)
            ]
        },
        "hero": {
            "type": "image",
            "url": "https://files.catbox.moe/nkc088.png",
            "size": "full",
            "aspectRatio": "2:1"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": textMessages
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                textSendMessage("Footer")
            ]
        }
    }
}

module.exports = {
    textSendMessage: textSendMessage,
    imageSendMessage: imageSendMessage,
    flexSendMessage: flexSendMessage
}