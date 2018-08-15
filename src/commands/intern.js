'use strict';

// load all command processor
const msg = require('./../utils/msg_object_handler');
const internList = require('./../data/intern_list.json');

function showIntern(company) {
    if(internList[company]) {
        let data = internList[company];
        return returnTextMesage(data);
    }
}

function returnBubbleMessage(data) {
    let header = data.header;
    let imageUrl = data.image;
    let link = data.link;
    let textMessages = [];
    data.content.forEach(el => {
        textMessages.push(msg.textSendMessage(el));
    });

    return msg.bubbleSendMessage(header, imageUrl, textMessages, link);
}

function returnTextMesage(data) {
    let result = '';

    let header = data.header + '\n';
    let textMessages = '';
    data.content.forEach(el => {
        textMessages += (el + '\n');
    });
    let link = 'Info lebih lanjut: ' + data.link;
    result += (header + textMessages + link);

    let imageUrl = data.image;
    return [
        msg.imageSendMessage(imageUrl, imageUrl),
        msg.textSendMessage(result)
    ]
}

module.exports = {
    showIntern: showIntern
}