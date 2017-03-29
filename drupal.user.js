// ==UserScript==
// @name        Drupal Predictor Sandboxed
// @namespace   calvtdrupalpredictorsandboxed
// @include     http://chat.stackexchange.com/rooms/55422/calvt-test-sandbox
// @include     http://chat.stackexchange.com/rooms/11540/charcoal-hqx
// @version     0.1.1
// @downloadURL 
// @updateURL 
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  // Version here to reduce possibility of not updating both
  var cbversion = '0.1.1';

  // Startup Function
  window.setTimeout(slowStart, 3000);
  function slowStart() {
    console.log('@CalvT hey o/');
  }

  // Reading Chat Function
  function CalvBotInterval() {
    $('.CalvBot').removeClass('CalvBot');
    $('.CalvBotCommand').removeClass('CalvBotCommand');
    $('#chat .user-container:last-child.user-64521').addClass('CalvBot').addClass('CalvBotCommand');
    $('#chat .user-container:last-child.user-120914').addClass('CalvBot');
    var smokey = $('.CalvBot .messages .message:last-child .content').text();
    var smokeylc = smokey.toLowerCase();
    var postid = $('.CalvBot .messages .message:last-child .content a:nth-child(3)').attr('href').split('questions/').pop();
    var cbcommand = $('.CalvBotCommand .messages .message:last-child .content').text();
    var cbcommandlc = cbcommand.toLowerCase();
    var lastpostid;

    //Select Drupal Messages Function
    var site = 'drupal.se';
    
    if (postid == lastpostid) {
        //do nothing
    } else {
        if (smokeylc.includes(site)) {
            console.log(postid);
        } else {
            // do nothing
        }
    }

    var refreshId = setInterval(CalvBotInterval, 2000);
}) ();