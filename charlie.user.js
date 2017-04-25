// ==UserScript==
// @name        Charlie Sandboxed
// @namespace   charliesandboxed
// @version     0.1
// @match        http://*/*
// @downloadURL 
// @updateURL 
// @grant       none
// ==/UserScript==

// Version
var cbversion = '0.1';

// Startup
window.setTimeout(cbstartup, 3000);
function cbstartup() {
    console.log('@CalvT Hey o/');
}

// 'Out of Function'
var lastposthref;

function CharlieBot() {
    $('.Charlie').removeClass('Charlie');
    $('#chat .user-container:last-child.user-120914').addClass('Charlie');
    var smokey = $('.DrupalBot .messages .message:last-child .content').text();
    var smokeylc = smokey.toLowerCase();
    console.log(smokeylc);
}

var refreshID = setInterval(CharlieBot, 2000);