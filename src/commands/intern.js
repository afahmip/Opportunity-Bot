'use strict';

// load all command processor
const msg = require('./../utils/msg_object_handler');
const internList = require('./../data/intern_list.json');

function showIntern(company) {
    if(internList[company]) {
        let data = internList[company];
        let header = data.header;
        let imageUrl = data.image;
        let link = data.link;
        let textMessages = [];
        data.content.forEach(el => {
            textMessages.push(msg.textSendMessage(el));
        });

        return msg.bubbleSendMessage(header, imageUrl, textMessages, link);
    }
}

module.exports = {
    showIntern: showIntern
}