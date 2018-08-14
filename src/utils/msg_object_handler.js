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

function carouselSendMessage() {
    return {
        "type": "carousel",
        "contents": [
        {
            "type": "bubble",
            "body": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
                {
                "type": "text",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "wrap": true
                }
            ]
            },
            "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
                {
                "type": "button",
                "style": "primary",
                "action": {
                    "type": "uri",
                    "label": "Go",
                    "uri": "https://example.com"
                }
                }
            ]
            }
        },
        {
            "type": "bubble",
            "body": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
                {
                "type": "text",
                "text": "Hello, World!",
                "wrap": true
                }
            ]
            },
            "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
                {
                "type": "button",
                "style": "primary",
                "action": {
                    "type": "uri",
                    "label": "Go",
                    "uri": "https://example.com"
                }
                }
            ]
            }
        }
        ]
    }
}

function flexSendMessage(header, textMessages) {
    // return {  
    //     "type": "bubble",
    //     "header": {
    //         "type": "box",
    //         "layout": "vertical",
    //         "contents": [
    //             textSendMessage(header)
    //         ]
    //     },
    //     "hero": {
    //         "type": "image",
    //         "url": "https://files.catbox.moe/nkc088.png",
    //         "size": "full",
    //         "aspectRatio": "2:1"
    //     },
    //     "body": {
    //         "type": "box",
    //         "layout": "vertical",
    //         "contents": textMessages
    //     },
    //     "footer": {
    //         "type": "box",
    //         "layout": "vertical",
    //         "contents": [
    //             textSendMessage("Footer")
    //         ]
    //     }
    // }

    /*
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
    */

    return {
        "type": "bubble",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": "header"
                }
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
            "contents": [
                {
                    "type": "text",
                    "text": "body"
                }
            ]
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": "footer"
                }
            ]
        }
    }
}

module.exports = {
    textSendMessage: textSendMessage,
    imageSendMessage: imageSendMessage,
    flexSendMessage: flexSendMessage
}