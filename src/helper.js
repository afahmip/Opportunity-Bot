'use strict';

function showInfo() {
    return (
        "This bot is created by afahmip."
    );
}

function showHelp() {
    return (
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

module.exports = {
    showHelp: showHelp,
    showInfo: showInfo
}