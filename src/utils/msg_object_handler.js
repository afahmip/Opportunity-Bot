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

function bubbleSendMessage(header, imageUrl, textMessages, link) { 
    return {
        "type": "flex",
        "altText": "Halo semua",
        "contents": {
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
                "url": imageUrl,
                "size": "full",
                "aspectRatio": "1:2",
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
                    {
                        "type": "button",
                        "style": "primary",
                        "action": {
                            "type": "uri",
                            "label": "Visit web",
                            "uri": link
                        }
                    }
                ]
            }
        }
    }
}

module.exports = {
    textSendMessage: textSendMessage,
    imageSendMessage: imageSendMessage,
    bubbleSendMessage: bubbleSendMessage,
    carouselSendMessage: carouselSendMessage
}