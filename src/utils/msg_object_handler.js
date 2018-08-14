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

function flexSendMessage(altText, textMessages) {
    return {  
        "type": "flex",
        "altText": altText,
        "contents": {
            "type": "bubble",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": textMessages
            }
        }
    }
}

module.exports = {
    textSendMessage: textSendMessage,
    imageSendMessage: imageSendMessage,
    flexSendMessage: flexSendMessage
}