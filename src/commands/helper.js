'use strict';

const msg = require('./../utils/msg_object_handler');

function showInfo() {
    return msg.textSendMessage("This bot is created by afahmip.");
}

function showHelp() {
    return msg.textSendMessage(
        "Command lists:\n \
        - !intern list\n \
        - !tips {cv/interview/materi}\n \
        - !webcarikerja \n \
        - !beasiswa\n \
        - !help\n \
        - !leave\n \
        - !info\n"
    );
}

function Karosel() {
    return msg.carouselSendMessage();
}

module.exports = {
    showHelp: showHelp,
    showInfo: showInfo,
    Karosel: Karosel
}