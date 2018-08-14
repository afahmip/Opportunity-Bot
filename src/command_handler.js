'use strict';

// load all command processor
const helper = require('./helper.js');

const fs = require('fs');
const path = require('path');

// load command list file
const commandList = require('./command_list.json');

function handleCommand(command) {
    if(commandList[command]) {
        return commandList[command]();
    }
    return "none";
}

module.exports = {
    handleCommand: handleCommand
}