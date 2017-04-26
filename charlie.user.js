// ==UserScript==
// @name        Charlie Sandboxed
// @namespace   charliesandboxed
// @version     0.2
// @match       *://chat.stackexchange.com/*
// @downloadURL 
// @updateURL 
// @grant       none
// ==/UserScript==

// Version
var cbversion = '0.2';

// Startup
window.setTimeout(cbstartup, 3000);
function cbstartup() {
    document.getElementById('input').value = '@CalvT hey o/';
    $('#sayit-button').click();
}

// 'Out of Function'
var lastpost;

function CharlieBot() {
    $('.Charlie').removeClass('Charlie');
    $('#chat .user-container:last-child').addClass('Charlie');
    var smokey = $('.Charlie .messages .message:last-child .content').text();
    var smokeylc = smokey.toLowerCase();
    if (smokeylc) {
        console.log(smokeylc);
        lastpost = smokeylc;
    } else {
        // do nothing
    }

}

var refreshID = setInterval(CharlieBot, 2000);