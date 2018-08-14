'use strict';

// load all command processor
const msg = require('./../utils/msg_object_handler');
const helper = require('./../commands/helper.js');

const fs = require('fs');
const path = require('path');

// load command list file
// const commandList = require('./command_list.json');
const commandList = {
    "!info": helper.showInfo,
    "!help": helper.showHelp,
    "coba": helper.Coba,
    "carousel": helper.Karosel
}

function handleCommand(command) {
    if(commandList[command]) {
        return commandList[command]();
    }
    return msg.textSendMessage("none");
}

module.exports = {
    handleCommand: handleCommand
}