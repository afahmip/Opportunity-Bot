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

function messageAction(label, text) {
    return {
        "type": "message",
        "label": label,
        "text": text
    }
}

function uriAction(label, uri) {
    return {
        "type": "uri",
        "label": label,
        "uri": uri
    }
}

function buttonSendMessage(style, action) {
    return {
        "type": "button",
        "style": style,
        "action": action
    }
}

function flexSendMessage(altText, contents) {
    return {
        "type": "flex",
        "altText": altText,
        "contents": contents
    }
}

function carouselSendMessage() {
    return {
        "type": "flex",
        "altText": "Halo semua",
        "contents": {
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
}

function bubbleSendMessage() { 
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
    //         "url": imageUrl,
    //         "size": "full",
    //         "aspectRatio": "1:1",
    //         "aspectMode": "fit"
    //     },
    //     "body": {
    //         "type": "box",
    //         "layout": "vertical",
    //         "contents": bodyMessages
    //     },
    //     "footer": {
    //         "type": "box",
    //         "layout": "horizontal",
    //         "contents": [
    //             {
    //                 "type": "button",
    //                 "style": "primary",
    //                 "action": {
    //                     "type": "uri",
    //                     "label": "Visit web",
    //                     "uri": link
    //                 }
    //             }
    //         ]
    //     }
    // }

    let bubble = { "type": "bubble" };
}

function createComponent(type, layout, contents) {
    return {
        "type": type,
        "layout": layout,
        "contents": contents
    }
}

module.exports = {
    textSendMessage: textSendMessage,
    imageSendMessage: imageSendMessage,
    flexSendMessage: flexSendMessage,
    bubbleSendMessage: bubbleSendMessage,
    carouselSendMessage: carouselSendMessage,
    buttonSendMessage: buttonSendMessage,
    createComponent: createComponent,
    messageAction: messageAction,
    uriAction: uriAction
}