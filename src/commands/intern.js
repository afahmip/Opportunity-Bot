'use strict';

// load all command processor
const msg = require('./../utils/msg_object_handler');
const companyList = require('./../data/company_list.json');
const roleList = require('./../data/role_list.json');

function showCompany(company) {
    if(companyList[company]) {
        let data = companyList[company];
        return companyTextMesage(data);
    }
    return msg.textSendMessage("Maaf belum ada info untuk saat ini :(");
}

function showRole(role) {
    if(role === "list") {
        let textMessages = [];
        roleList.code.forEach(elem => {

            console.log(roleList.role[elem].text);

            let action = msg.messageAction(roleList.role[elem].text, "!role "+elem);
            let button = msg.buttonSendMessage("link", action);
            let box = msg.boxSendMessage([button]);
            textMessages.push(box);
        });
        return msg.boxSendMessage(textMessages);
    } else if(roleList.role[role]) {
        return msg.textSendMessage(roleList.role[role].text);
    }
}

function companyBubbleMessage(data) {
    let header = data.header;
    let imageUrl = data.image;
    let link = data.link;
    let textMessages = [];
    data.content.forEach(el => {
        textMessages.push(msg.textSendMessage(el));
    });

    let bubble = bubbleSendMessage(header, imageUrl, textMessages, link);
    return msg.flexSendMessage(data.header, bubble);
}

function companyTextMesage(data) {
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
    showCompany: showCompany,
    showRole: showRole
}