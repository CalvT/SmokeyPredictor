// ==UserScript==
// @name        Drupal Predictor Sandboxed
// @namespace   calvtdrupalpredictorsandboxed
// @version     0.2.1
// @match        http://*/*
// @downloadURL 
// @updateURL 
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  // Version
  var cbversion = '0.2.1';

  // Startup function
  window.setTimeout(slowStart, 3000);
  function slowStart() {
      console.log('@CalvT Hey o/')
  }

  // Chat Reading Function
  function CalvDrupalBot () {
      $('.DrupalBot').removeClass('DrupalBot');
      $('#chat .user-container:last-child.user-64521').addClass('DrupalBot');
      $('#chat .user-container:last-child.user-120914').addClass('DrupalBot');
      var smokey = $('.DrupalBot .messages .message:last-child .content').text();
      var smokeylc = smokey.toLowerCase();
      var posttext = $('.DrupalBot .messages .message:last-child .content a:nth-child(3)').attr('href');
      var lastposttext;

      // Targetted Site
      var site = 'drupal.se';

      if (posttext === lastposttext) {
          // Do nothing
      } else {
          if (smokeylc.includes(site)) {
              var postid = posttext.split('questions/').pop();
              console.log(postid);
              lastposttext = posttext;
          } else {
              // Do nothing
          }
      }
  }

  var refreshID = setInterval(CalvDrupalBot, 2000);

}) ();
