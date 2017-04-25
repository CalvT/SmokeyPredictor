// ==UserScript==
// @name        Charlie Sandboxed
// @namespace   charliesandboxed
// @version     0.1.1
// @match       *://chat.stackexchange.com/*
// @downloadURL 
// @updateURL 
// @grant       none
// ==/UserScript==

// Version
var cbversion = '0.1.1';

// Startup
window.setTimeout(cbstartup, 3000);
function cbstartup() {
    console.log('@CalvT Hey o/');
}

// 'Out of Function'
var lastpost;

function CharlieBot() {
    $('.Charlie').removeClass('Charlie');
    $('#chat .user-container:last-child.user-120914').addClass('Charlie');
    var smokey = $('.DrupalBot .messages .message:last-child .content').text();
    var smokeylc = smokey.toLowerCase();
    if (smokeylc) {
        console.log(smokeylc);
        lastpost = smokeylc;
    } else {
        // do nothing
    }
    
}

var refreshID = setInterval(CharlieBot, 2000);