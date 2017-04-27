// ==UserScript==
// @name        Charlie Sandboxed
// @namespace   charliesandboxed
// @version     0.2.4
// @match       *://chat.stackexchange.com/*
// @downloadURL 
// @updateURL 
// @grant       none
// ==/UserScript==

// Version
var cbversion = '0.2.4';

// Startup
window.setTimeout(cbstartup, 3000);
function cbstartup() {
    document.getElementById('input').value = '@CalvT hey o/';
    $('#sayit-button').click();
}

// 'Out of Function'
var lastpost;
var commandusers = '.user-64521';
var smokeyusers = '.user-120914'; //, .user-272039
var CharlieCall = ['@charlie', '@charlieb'];

function CharlieBot() {
    $('.Charlie').removeClass('Charlie');
    $('#chat .user-container:last-child').addClass('Charlie');
    if ($('.Charlie').is(smokeyusers)) {
        SmokeyReply();
    } else {
        var charlietext = $('.Charlie .messages .message:last-child .content').text();
        var charlietextlc = charlietext.toLowerCase();
        if (CharlieCall.some(function(v) { return charlietextlc.indexOf(v) >= 0; })) {
            if ($('.Charlie').is(commandusers)) {
                Commands();
            } else {
                NoPrivsCommand();
            }
        }
    }

}

function SmokeyReply() {
    var smokey = $('.Charlie .messages .message:last-child .content').text();
    var smokeylc = smokey.toLowerCase();
    if (smokeylc) {
        if (smokeylc !== lastpost) {
            console.log(smokeylc);
            lastpost = smokeylc;
        }
    }
}

function Commands() {
    var chatcommand = $('.Charlie .messages .message:last-child .content').text();
    var chatcommandlc = chatcommand.toLowerCase();
    console.log("Command: " + chatcommandlc);
}

function NoPrivsCommand() {
    document.getElementById('input').value = 'Sorry, I\'m not allow to talk to you. CalvT won\'t let me';
    $('#sayit-button').click();
}

var refreshID = setInterval(CharlieBot, 2000);
