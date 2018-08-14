'use strict';

// load all command processor
const msg = require('./../utils/msg_object_handler');
const helper = require('./../commands/helper');
const intern = require('./../commands/intern');

const fs = require('fs');
const path = require('path');

// load command list file
// const commandList = require('./command_list.json');
const commandList = {
    "!info": helper.showInfo,
    "!help": helper.showHelp,
    "carousel": helper.Karosel,
    "!intern": intern.showIntern
}

function handleCommand(command) {
    if(commandList[command]) {
        return commandList[command]();
    }
}

module.exports = {
    handleCommand: handleCommand
}