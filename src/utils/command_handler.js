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
    "!company": intern.showCompany,
    "!role": intern.showRole
}

function handleCommand(input) {
    let input_split = input.split(" ", 2);
    let command = input_split[0];
    
    if(input_split.length > 1) {
        let param = input_split[1];
        return commandList[command](param);
    } else {
        return commandList[command]();
    }
}

module.exports = {
    handleCommand: handleCommand
}